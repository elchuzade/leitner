const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Profile = require('../models/Profile')
const Card = require('../models/Card')

require('dotenv').config()

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType } = require('graphql')

// Card Type
const CardType = new GraphQLObjectType({
  name: 'Card',
  fields: () => ({
    id: { type: GraphQLID },
    stage: { type: GraphQLNonNull(GraphQLString) },
    word: { type: GraphQLNonNull(GraphQLString) },
    translation: { type: GraphQLNonNull(GraphQLString) },
    sentence: { type: GraphQLNonNull(GraphQLString) },
    profile: {
      type: ProfileType,
      resolve(parent: any, args: any) {
        return Profile.findById(parent.profile)
      }
    }
  })
})

// User Type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    password: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) }
  })
})

// Profile Type
const ProfileType = new GraphQLObjectType({
  name: 'Profile',
  fields: () => ({
    id: { type: GraphQLID },
    user: {
      type: UserType,
      resolve(parent: any, args: any) {
        return User.findById(parent.user)
      }
    }
  })
})

// Root Queries
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: new GraphQLList(UserType),
      resolve(parent: any, args: any) {
        return User.findById(args.id)
      }
    },
    profile: {
      type: ProfileType,
      args: { id: { type: GraphQLID } },
      resolve(parent: any, args: any) {
        return Profile.findById(args.id)
      }
    },
    cards: {
      type: new GraphQLList(CardType),
      resolve(parent: any, args: any) {
        return Card.find({ profile: args.profile })
      }
    }
  }
})

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Sign Up
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) }
      },
      async resolve(parent: any, args: any) {
        const user = new User({
          email: args.email,
          password: args.password
        })

        bcrypt.genSalt(10, (err: any, salt: any) => {
          bcrypt.hash(user.password, salt, async (err: any, hash: any) => {
            if (err) throw err

            user.password = hash

            const profile = new Profile({ user: user._id, name: args.name })
            const newProfile = await profile.save()

            user.profile = newProfile._id

            return user.save()
          })
        })
      }
    },
    // Sign In
    signin: {
      type: UserType,
      args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) }
      },
      async resolve(parent: any, args: any) {
        const user = await User.findOne({ email: args.email })
        if (!user) return { success: false, error: 'User not found' }

        const isMatch = await bcrypt.compare(args.password, user.password)
        if (!isMatch) return { success: false, error: 'Password is incorrect' }

        const payload = {
          id: user.id,
          permission: user.permission,
          profile: user.profile
        } // jwt payload
        // Sign Token
        jwt.sign(
          payload,
          process.env.SECRET_OR_KEY,
          { expiresIn: 3600 * 24 * 365 }, // token expires in 1 year
          (err: any, token: string) => {
            if (err) {
              console.log(err)
            } else {
              return { success: true, token: 'Bearer ' + token }
            }
          }
        )
      }
    },
    // Add Card
    addCard: {
      type: CardType,
      args: {
        word: { type: GraphQLNonNull(GraphQLString) },
        sentence: { type: GraphQLNonNull(GraphQLString) },
        translation: { type: GraphQLNonNull(GraphQLString) },
        stage: { type: GraphQLNonNull(GraphQLString) },
        profile: { type: GraphQLNonNull(GraphQLID) }
      },
      resolve(parent: any, args: any) {
        const card = new Card({
          word: args.word,
          sentence: args.sentence,
          translation: args.translation,
          stage: args.stage,
          profile: args.profile
        })

        return card.save()
      }
    },
    // Update Card
    updateCard: {
      type: CardType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        word: { type: GraphQLNonNull(GraphQLString) },
        sentence: { type: GraphQLNonNull(GraphQLString) },
        translation: { type: GraphQLNonNull(GraphQLString) },
        stage: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parent: any, args: any) {
        return Card.findByIdAndUpdate(
          args.id,
          {
            $set: {
              word: args.word,
              sentence: args.sentence,
              translation: args.translation,
              stage: args.stage
            }
          },
          { new: true }
        )
      }
    },
    // Delete Card
    deleteCard: {
      type: CardType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        word: { type: GraphQLNonNull(GraphQLString) },
        sentence: { type: GraphQLNonNull(GraphQLString) },
        translation: { type: GraphQLNonNull(GraphQLString) },
        stage: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parent: any, args: any) {
        return Card.findByIdAndRemove(args.id)
      }
    },
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
})