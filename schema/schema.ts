const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Profile = require("../models/Profile");
const Project = require("../models/Project");
const Card = require("../models/Card");

require("dotenv").config();

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNumber,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLError,
} = require("graphql");

// User Type
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    password: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
  }),
});

// Auth Type
const AuthType = new GraphQLObjectType({
  name: "Auth",
  fields: () => ({
    token: { type: GraphQLString },
  }),
});

// Profile Type
const ProfileType = new GraphQLObjectType({
  name: "Profile",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    deleted: { type: GraphQLBoolean },
    user: {
      type: UserType,
      resolve(parent: any, args: any) {
        return User.findById(parent.user);
      },
    },
  }),
});

// Project Type
const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    profile: {
      type: ProfileType,
      resolve(parent: any, args: any) {
        return Profile.findById(parent.profile);
      },
    },
  }),
});

// Card Type
const CardType = new GraphQLObjectType({
  name: "Card",
  fields: () => ({
    id: { type: GraphQLID },
    stage: { type: GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    hint: { type: GraphQLString },
    answer: { type: GraphQLString },
    profile: {
      type: ProfileType,
      resolve(parent: any, args: any) {
        return Profile.findById(parent.profile);
      },
    },
  }),
});

// Root Queries
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    profile: {
      type: ProfileType,
      args: { id: { type: GraphQLID } },
      resolve(parent: any, args: any, context: any) {
        console.log(context?.headers?.authorization);
        return Profile.findById(args.id);
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      args: { profile: { type: GraphQLID } },
      resolve(parent: any, args: any) {
        return Project.find({ profile: args.profile });
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent: any, args: any) {
        return Project.findById(args.id);
      },
    },
    cards: {
      type: new GraphQLList(CardType),
      args: { profile: { type: GraphQLID } },
      resolve(parent: any, args: any) {
        return Card.find({ project: args.profile });
      },
    },
    card: {
      type: CardType,
      args: { id: { type: GraphQLID } },
      resolve(parent: any, args: any) {
        return Card.findById(args.id);
      },
    },
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Sign Up
    signup: {
      type: AuthType,
      args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
      },
      async resolve(parent: any, args: any) {
        const foundUser = await User.findOne({ email: args.email });
        if (foundUser != null)
          throw new GraphQLError("User with this email already exists.", {
            extensions: { code: "" },
          });

        const user = new User({
          email: args.email,
          password: args.password,
          permission: 5,
          deleted: false,
        });

        const salt = await bcrypt.genSalt(10);
        console.log(salt);
        const hash = await bcrypt.hash(user.password, salt);
        console.log(hash);
        user.password = hash;

        const profile = new Profile({ user: user._id, name: args.name });
        await profile.save();
        await user.save();

        const payload = {
          id: user.id,
          permission: user.permission,
        }; // jwt payload
        // Sign Token
        const token = await jwt.sign(
          payload,
          process.env.SECRET_OR_KEY,
          { expiresIn: 3600 * 24 * 365 } // token expires in 1 year
        );

        return { token: "Bearer " + token };
      },
    },
    // Sign In
    signin: {
      type: AuthType,
      args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent: any, args: any) {
        const user = await User.findOne({ email: args.email });
        if (!user)
          throw new GraphQLError("User not found.", {
            extensions: { code: "" },
          });

        const isMatch = await bcrypt.compare(args.password, user.password);
        if (!isMatch)
          throw new GraphQLError("Password is incorrect.", {
            extensions: { code: "" },
          });

        const payload = {
          id: user.id,
          permission: user.permission,
        }; // jwt payload
        // Sign Token
        const token = await jwt.sign(
          payload,
          process.env.SECRET_OR_KEY,
          { expiresIn: 3600 * 24 * 365 } // token expires in 1 year
        );

        return { token: "Bearer " + token };
      },
    },
    // Update Profile
    updateProfile: {
      type: ProfileType,
      args: {
        name: { type: GraphQLString },
      },
      async resolve(parent: any, args: any) {
        try {
          const profile = await Profile.findOne({ user: args.user });
          if (!profile)
            return {
              success: false,
              error: "Could not update profile. Profile not found.",
            };

          profile.name = args.name;

          return profile.save();
        } catch (error) {
          return { success: false, error: "Could not update profile" };
        }
      },
    },
    // Add Project
    addProject: {
      type: ProjectType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
      },
      async resolve(parent: any, args: any) {
        try {
          const profile = await Profile.findOne({ user: args.user });
          if (!profile)
            return {
              success: false,
              error: "Could not add project. Profile not found.",
            };

          const project = new Project({
            title: args.title,
            description: args.description,
            profile: profile._id,
          });

          return project.save();
        } catch (error) {
          return { success: false, error: "Could not add project" };
        }
      },
    },
    // Update Project
    updateProject: {
      type: ProjectType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        projectId: { type: GraphQLID },
      },
      async resolve(parent: any, args: any) {
        try {
          const profile = await Profile.findOne({ user: args.user });
          if (!profile)
            return {
              success: false,
              error: "Could not update project. Profile not found.",
            };
          const project = await Project.findById(args.projectId);
          if (!project)
            return {
              success: false,
              error: "Could not update project. Project not found.",
            };

          if (project.profile !== profile._id) {
            return {
              success: false,
              error: "Could not update project. Unauthorized.",
            };
          }

          project.title = args.title;
          project.description = args.description;

          return project.save();
        } catch (error) {
          return { success: false, error: "Could not update project" };
        }
      },
    },
    // Delete Project
    deleteProject: {
      type: ProjectType,
      args: {
        projectId: { type: GraphQLID },
      },
      async resolve(parent: any, args: any) {
        try {
          const profile = await Profile.findOne({ user: args.user });
          if (!profile)
            return {
              success: false,
              error: "Could not delete project. Profile not found.",
            };
          const project = await Project.findById(args.projectId);
          if (!project)
            return {
              success: false,
              error: "Could not delete project. Project not found.",
            };
          if (project.profile !== profile._id) {
            return {
              success: false,
              error: "Could not delete project. Unauthorized.",
            };
          }

          project.deleted = true;

          return project.save();
        } catch (error) {
          return { success: false, error: "Could not delete project" };
        }
      },
    },
    // Add Card
    addCard: {
      type: CardType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        hint: { type: GraphQLString },
        answer: { type: GraphQLString },
        stage: { type: GraphQLNonNull(GraphQLString) },
        projectId: { type: GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent: any, args: any) {
        try {
          const profile = await Profile.findOne({ user: args.user });
          if (!profile)
            return {
              success: false,
              error: "Could not add card. Profile not found.",
            };
          const project = await Project.findById(args.projectId);
          if (!project)
            return {
              success: false,
              error: "Could not add card. Project not found.",
            };
          if (project.profile !== profile._id) {
            return {
              success: false,
              error: "Could not add card. Unauthorized.",
            };
          }
          if (project.deleted) {
            return {
              success: false,
              error: "Could not add card. Project is deleted.",
            };
          }

          const card = new Card({
            title: args.title,
            description: args.description,
            hint: args.hint,
            answer: args.answer,
            stage: args.stage,
            profile: profile._id,
            project: project._id,
          });

          return card.save();
        } catch (error) {
          return { success: false, error: "Could not add card" };
        }
      },
    },
    // Update Card
    updateCard: {
      type: CardType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        hint: { type: GraphQLString },
        answer: { type: GraphQLString },
        stage: { type: GraphQLNonNull(GraphQLString) },
        cardId: { type: GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent: any, args: any) {
        try {
          const profile = await Profile.findOne({ user: args.user });
          if (!profile)
            return {
              success: false,
              error: "Could not update card. Profile not found.",
            };
          const card = await Card.findById(args.cardId);
          if (!card)
            return {
              success: false,
              error: "Could not update card. Card not found.",
            };
          if (card.deleted)
            return {
              success: false,
              error: "Could not update card. Card is deleted.",
            };
          if (card.profile !== profile._id)
            return {
              success: false,
              error: "Could not update card. Unauthorized.",
            };
          const project = await Project.findById(card.project);
          if (!project)
            return {
              success: false,
              error: "Could not update card. Project not found.",
            };
          if (project.deleted) {
            return {
              success: false,
              error: "Could not update card. Project is deleted.",
            };
          }

          card.title = args.title;
          card.description = args.description;
          card.hint = args.hint;
          card.answer = args.answer;
          card.stage = args.stage;

          return card.save();
        } catch (error) {
          return { success: false, error: "Could not update card" };
        }
      },
    },
    // Delete Card
    deleteCard: {
      type: CardType,
      args: {
        cardId: { type: GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent: any, args: any) {
        try {
          const profile = await Profile.findOne({ user: args.user });
          if (!profile)
            return {
              success: false,
              error: "Could not delete card. Profile not found.",
            };
          const card = await Card.findById(args.cardId);
          if (!card)
            return {
              success: false,
              error: "Could not delete card. Card not found.",
            };
          if (card.deleted)
            return {
              success: false,
              error: "Could not delete card. Card is deleted.",
            };
          if (card.profile !== profile._id)
            return {
              success: false,
              error: "Could not delete card. Unauthorized.",
            };
          const project = await Project.findById(card.project);
          if (!project)
            return {
              success: false,
              error: "Could not delete card. Project not found.",
            };
          if (project.deleted) {
            return {
              success: false,
              error: "Could not delete card. Project is deleted.",
            };
          }
          card.deleted = true;

          return card.save();
        } catch (error) {
          return { success: false, error: "Could not deleted card" };
        }
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
