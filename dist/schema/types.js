"use strict";
// Auth Type
const AuthType = new GraphQLObjectType({
    name: "Auth",
    fields: () => ({
        token: { type: GraphQLString },
    }),
});
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
// Profile Type
const ProfileType = new GraphQLObjectType({
    name: "Profile",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        deleted: { type: GraphQLBoolean },
        user: {
            type: UserType,
            resolve(parent, args) {
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
        deleted: { type: GraphQLBoolean },
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.user);
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
        deleted: { type: GraphQLBoolean },
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.user);
            },
        },
    }),
});
module.exports = {
    AuthType,
    UserType,
    ProfileType,
    ProjectType,
    CardType,
};
