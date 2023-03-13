"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Profile = require("../models/Profile");
const Project = require("../models/Project");
const Card = require("../models/Card");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNumber, GraphQLBoolean, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType, GraphQLError, } = require("graphql");
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
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.user);
            },
        },
    }),
});
// Root Queries
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        // Get my profile
        profile: {
            type: ProfileType,
            resolve(parent, args, context) {
                var _a;
                const token = (_a = context === null || context === void 0 ? void 0 : context.headers) === null || _a === void 0 ? void 0 : _a.authorization;
                console.log(token);
                const userPayload = jwt.verify(token, process.env.SECRET_OR_KEY);
                return Profile.findOne({ user: userPayload.id });
            },
        },
        // Get all projects that belong to me
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args, context) {
                var _a;
                const token = (_a = context === null || context === void 0 ? void 0 : context.headers) === null || _a === void 0 ? void 0 : _a.authorization;
                const userPayload = jwt.verify(token, process.env.SECRET_OR_KEY);
                return Project.find({ user: userPayload.id });
            },
        },
        // Get project based on id
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args, context) {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    const token = (_a = context === null || context === void 0 ? void 0 : context.headers) === null || _a === void 0 ? void 0 : _a.authorization;
                    const userPayload = jwt.verify(token, process.env.SECRET_OR_KEY);
                    const project = yield Project.findById(args.id);
                    if (project.user !== userPayload.id) {
                        throw new GraphQLError("Unathorized.", {
                            extensions: { code: "" },
                        });
                    }
                    return project;
                });
            },
        },
        // Get all cards that belong to a specific project
        cards: {
            type: new GraphQLList(CardType),
            args: { project: { type: GraphQLID } },
            resolve(parent, args, context) {
                var _a;
                const token = (_a = context === null || context === void 0 ? void 0 : context.headers) === null || _a === void 0 ? void 0 : _a.authorization;
                const userPayload = jwt.verify(token, process.env.SECRET_OR_KEY);
                return Card.find({ project: args.project, user: userPayload.id });
            },
        },
        // Get a card based on id
        card: {
            type: CardType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args, context) {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    const token = (_a = context === null || context === void 0 ? void 0 : context.headers) === null || _a === void 0 ? void 0 : _a.authorization;
                    const userPayload = jwt.verify(token, process.env.SECRET_OR_KEY);
                    const card = yield Card.findById(args.id);
                    if (card.user !== userPayload.id) {
                        throw new GraphQLError("Unathorized.", {
                            extensions: { code: "" },
                        });
                    }
                    return card;
                });
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
            resolve(parent, args) {
                return __awaiter(this, void 0, void 0, function* () {
                    const foundUser = yield User.findOne({ email: args.email });
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
                    const salt = yield bcrypt.genSalt(10);
                    const hash = yield bcrypt.hash(user.password, salt);
                    user.password = hash;
                    const profile = new Profile({ user: user._id, name: args.name });
                    yield profile.save();
                    yield user.save();
                    const userPayload = {
                        id: user.id,
                        permission: user.permission,
                    }; // jwt userPayload
                    // Sign Token
                    const token = yield jwt.sign(userPayload, process.env.SECRET_OR_KEY, { expiresIn: 3600 * 24 * 365 } // token expires in 1 year
                    );
                    return { token };
                });
            },
        },
        // Sign In
        signin: {
            type: AuthType,
            args: {
                email: { type: GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                return __awaiter(this, void 0, void 0, function* () {
                    const user = yield User.findOne({ email: args.email });
                    if (!user)
                        throw new GraphQLError("User not found.", {
                            extensions: { code: "" },
                        });
                    const isMatch = yield bcrypt.compare(args.password, user.password);
                    if (!isMatch)
                        throw new GraphQLError("Password is incorrect.", {
                            extensions: { code: "" },
                        });
                    const userPayload = {
                        id: user.id,
                        permission: user.permission,
                    }; // jwt userPayload
                    // Sign Token
                    const token = yield jwt.sign(userPayload, process.env.SECRET_OR_KEY, { expiresIn: 3600 * 24 * 365 } // token expires in 1 year
                    );
                    return { token };
                });
            },
        },
        // Update Profile
        updateProfile: {
            type: ProfileType,
            args: {
                name: { type: GraphQLString },
            },
            resolve(parent, args, context) {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    const token = (_a = context === null || context === void 0 ? void 0 : context.headers) === null || _a === void 0 ? void 0 : _a.authorization;
                    const userPayload = jwt.verify(token, process.env.SECRET_OR_KEY);
                    try {
                        const profile = yield Profile.findOne({ user: userPayload.id });
                        if (!profile)
                            throw new GraphQLError("Could not update profile. Profile not found.", {
                                extensions: { code: "" },
                            });
                        profile.name = args.name;
                        return profile.save();
                    }
                    catch (error) {
                        throw new GraphQLError("Could not update profile.", {
                            extensions: { code: "" },
                        });
                    }
                });
            },
        },
        // Add Project
        addProject: {
            type: ProjectType,
            args: {
                title: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLString },
            },
            resolve(parent, args, context) {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    const token = (_a = context === null || context === void 0 ? void 0 : context.headers) === null || _a === void 0 ? void 0 : _a.authorization;
                    const userPayload = jwt.verify(token, process.env.SECRET_OR_KEY);
                    try {
                        const user = yield User.findById(userPayload.id);
                        if (!user)
                            throw new GraphQLError("Could not add project. User not found.", {
                                extensions: { code: "" },
                            });
                        const project = new Project({
                            title: args.title,
                            description: args.description,
                            user: user._id,
                        });
                        return project.save();
                    }
                    catch (error) {
                        throw new GraphQLError("Could not add project.", {
                            extensions: { code: "" },
                        });
                    }
                });
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
            resolve(parent, args) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const profile = yield Profile.findOne({ user: args.user });
                        if (!profile)
                            return {
                                success: false,
                                error: "Could not update project. Profile not found.",
                            };
                        const project = yield Project.findById(args.projectId);
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
                    }
                    catch (error) {
                        return { success: false, error: "Could not update project" };
                    }
                });
            },
        },
        // Delete Project
        deleteProject: {
            type: ProjectType,
            args: {
                projectId: { type: GraphQLID },
            },
            resolve(parent, args) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const profile = yield Profile.findOne({ user: args.user });
                        if (!profile)
                            return {
                                success: false,
                                error: "Could not delete project. Profile not found.",
                            };
                        const project = yield Project.findById(args.projectId);
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
                    }
                    catch (error) {
                        return { success: false, error: "Could not delete project" };
                    }
                });
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
            resolve(parent, args) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const profile = yield Profile.findOne({ user: args.user });
                        if (!profile)
                            return {
                                success: false,
                                error: "Could not add card. Profile not found.",
                            };
                        const project = yield Project.findById(args.projectId);
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
                    }
                    catch (error) {
                        return { success: false, error: "Could not add card" };
                    }
                });
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
            resolve(parent, args) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const profile = yield Profile.findOne({ user: args.user });
                        if (!profile)
                            return {
                                success: false,
                                error: "Could not update card. Profile not found.",
                            };
                        const card = yield Card.findById(args.cardId);
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
                        const project = yield Project.findById(card.project);
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
                    }
                    catch (error) {
                        return { success: false, error: "Could not update card" };
                    }
                });
            },
        },
        // Delete Card
        deleteCard: {
            type: CardType,
            args: {
                cardId: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const profile = yield Profile.findOne({ user: args.user });
                        if (!profile)
                            return {
                                success: false,
                                error: "Could not delete card. Profile not found.",
                            };
                        const card = yield Card.findById(args.cardId);
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
                        const project = yield Project.findById(card.project);
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
                    }
                    catch (error) {
                        return { success: false, error: "Could not deleted card" };
                    }
                });
            },
        },
    },
});
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
});
