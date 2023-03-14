"use strict";
const { 
// GraphQLObjectType,
// GraphQLID,
// GraphQLString,
GraphQLBoolean,
// GraphQLNonNull,
 } = require("graphql");
// const User = require("../models/User");
// Auth Type
const authType = new GraphQLObjectType({
    name: "Auth",
    fields: () => ({
        token: { type: GraphQLString },
    }),
});
// User Type
const userType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID },
        password: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
    }),
});
// Profile Type
const profileType = new GraphQLObjectType({
    name: "Profile",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        deleted: { type: GraphQLBoolean },
        user: {
            type: userType,
            resolve(parent, args) {
                return User.findById(parent.user);
            },
        },
    }),
});
// Project Type
const projectType = new GraphQLObjectType({
    name: "Project",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        deleted: { type: GraphQLBoolean },
        user: {
            type: userType,
            resolve(parent, args) {
                return User.findById(parent.user);
            },
        },
    }),
});
// Card Type
const cardType = new GraphQLObjectType({
    name: "Card",
    fields: () => ({
        id: { type: GraphQLID },
        stage: { type: GraphQLNonNull(GraphQLString) },
        title: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        hint: { type: GraphQLString },
        answer: { type: GraphQLString },
        deleted: { type: GraphQLBoolean },
        user: {
            type: userType,
            resolve(parent, args) {
                return User.findById(parent.user);
            },
        },
    }),
});
module.exports = {
    AuthType: authType,
    UserType: userType,
    ProfileType: profileType,
    ProjectType: projectType,
    CardType: cardType,
};
