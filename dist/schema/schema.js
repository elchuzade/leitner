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
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType, GraphQLError, } = require("graphql");
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
        stage: { type: GraphQLNonNull(GraphQLInt) },
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
        // Get project based on projectId
        project: {
            type: ProjectType,
            args: { projectId: { type: GraphQLID } },
            resolve(parent, args, context) {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    const token = (_a = context === null || context === void 0 ? void 0 : context.headers) === null || _a === void 0 ? void 0 : _a.authorization;
                    const userPayload = jwt.verify(token, process.env.SECRET_OR_KEY);
                    const project = yield Project.findById(args.projectId);
                    if (JSON.stringify(project.user) !== JSON.stringify(userPayload.id)) {
                        throw new GraphQLError("Could not get project. Unathorized.", {
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
            args: { projectId: { type: GraphQLID } },
            resolve(parent, args, context) {
                var _a;
                const token = (_a = context === null || context === void 0 ? void 0 : context.headers) === null || _a === void 0 ? void 0 : _a.authorization;
                const userPayload = jwt.verify(token, process.env.SECRET_OR_KEY);
                return Card.find({ project: args.projectId, user: userPayload.id });
            },
        },
        // Get a card based on cardId
        card: {
            type: CardType,
            args: { cardId: { type: GraphQLID } },
            resolve(parent, args, context) {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    const token = (_a = context === null || context === void 0 ? void 0 : context.headers) === null || _a === void 0 ? void 0 : _a.authorization;
                    const userPayload = jwt.verify(token, process.env.SECRET_OR_KEY);
                    const card = yield Card.findById(args.cardId);
                    if (JSON.stringify(card.user) !== JSON.stringify(userPayload.id)) {
                        throw new GraphQLError("Could not get card. Unathorized.", {
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
                    let errorMessage = "Could not update profile.";
                    try {
                        const profile = yield Profile.findOne({ user: userPayload.id });
                        if (!profile) {
                            errorMessage += " Profile not found.";
                            throw errorMessage;
                        }
                        profile.name = args.name;
                        return profile.save();
                    }
                    catch (error) {
                        throw new GraphQLError(error, {
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
                    let errorMessage = " Could not add project.";
                    try {
                        const user = yield User.findById(userPayload.id);
                        if (!user) {
                            errorMessage += " User not found.";
                            throw errorMessage;
                        }
                        const project = new Project({
                            title: args.title,
                            description: args.description,
                            user: user._id,
                        });
                        return project.save();
                    }
                    catch (error) {
                        throw new GraphQLError(error, {
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
            resolve(parent, args, context) {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    const token = (_a = context === null || context === void 0 ? void 0 : context.headers) === null || _a === void 0 ? void 0 : _a.authorization;
                    const userPayload = jwt.verify(token, process.env.SECRET_OR_KEY);
                    let errorMessage = "Could not update project.";
                    try {
                        const user = yield User.findById(userPayload.id);
                        if (!user) {
                            errorMessage += " User not found.";
                            throw errorMessage;
                        }
                        const project = yield Project.findById(args.projectId);
                        if (!project) {
                            errorMessage += " Project not found.";
                            throw errorMessage;
                        }
                        if (JSON.stringify(project.user) !== JSON.stringify(user._id)) {
                            errorMessage += " Unathorized.";
                            throw errorMessage;
                        }
                        project.title = args.title;
                        project.description = args.description;
                        return project.save();
                    }
                    catch (error) {
                        throw new GraphQLError(error, {
                            extensions: { code: "" },
                        });
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
            resolve(parent, args, context) {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    const token = (_a = context === null || context === void 0 ? void 0 : context.headers) === null || _a === void 0 ? void 0 : _a.authorization;
                    const userPayload = jwt.verify(token, process.env.SECRET_OR_KEY);
                    let errorMessage = "Could not delete project.";
                    try {
                        const user = yield User.findById(userPayload.id);
                        if (!user) {
                            errorMessage += " User not found.";
                            throw errorMessage;
                        }
                        const project = yield Project.findById(args.projectId);
                        if (!project) {
                            errorMessage += " Project not found.";
                            throw errorMessage;
                        }
                        if (JSON.stringify(project.user) !== JSON.stringify(user._id)) {
                            errorMessage += " Unathorized";
                            throw errorMessage;
                        }
                        project.deleted = true;
                        return project.save();
                    }
                    catch (error) {
                        throw new GraphQLError(error, {
                            extensions: { code: "" },
                        });
                    }
                });
            },
        },
        // Add Card
        addCard: {
            type: CardType,
            args: {
                title: { type: GraphQLNonNull(GraphQLString) },
                hint: { type: GraphQLString },
                description: { type: GraphQLString },
                answer: { type: GraphQLString },
                // stage: { type: GraphQLNonNull(GraphQLInt) },
                projectId: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args, context) {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    const token = (_a = context === null || context === void 0 ? void 0 : context.headers) === null || _a === void 0 ? void 0 : _a.authorization;
                    const userPayload = jwt.verify(token, process.env.SECRET_OR_KEY);
                    let errorMessage = "Could not add card.";
                    try {
                        const user = yield User.findById(userPayload.id);
                        if (!user) {
                            errorMessage += " User not found.";
                            throw errorMessage;
                        }
                        const project = yield Project.findById(args.projectId);
                        if (!project) {
                            errorMessage += " Project not found.";
                            throw errorMessage;
                        }
                        if (JSON.stringify(project.user) !== JSON.stringify(user._id)) {
                            errorMessage += " Project is deleted.";
                            throw errorMessage;
                        }
                        if (project.deleted) {
                            errorMessage += " Project is deleted.";
                            throw errorMessage;
                        }
                        const card = new Card({
                            title: args.title,
                            hint: args.hint,
                            description: args.description,
                            answer: args.answer,
                            stage: 1,
                            user: user._id,
                            project: project._id,
                        });
                        return card.save();
                    }
                    catch (error) {
                        throw new GraphQLError(error, {
                            extensions: { code: "" },
                        });
                    }
                });
            },
        },
        // Update Card
        updateCard: {
            type: CardType,
            args: {
                title: { type: GraphQLNonNull(GraphQLString) },
                hint: { type: GraphQLString },
                description: { type: GraphQLString },
                answer: { type: GraphQLString },
                cardId: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args, context) {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    const token = (_a = context === null || context === void 0 ? void 0 : context.headers) === null || _a === void 0 ? void 0 : _a.authorization;
                    const userPayload = jwt.verify(token, process.env.SECRET_OR_KEY);
                    let errorMessage = "Could not update card.";
                    try {
                        const user = yield User.findById(userPayload.id);
                        if (!user) {
                            errorMessage += " User not found.";
                            throw errorMessage;
                        }
                        const card = yield Card.findById(args.cardId);
                        if (!card) {
                            errorMessage += " Card not found.";
                            throw errorMessage;
                        }
                        if (card.deleted) {
                            errorMessage += " Card is deleted.";
                            throw errorMessage;
                        }
                        if (JSON.stringify(card.user) !== JSON.stringify(user._id)) {
                            errorMessage += " Unauthorized.";
                            throw errorMessage;
                        }
                        const project = yield Project.findById(card.project);
                        if (!project) {
                            errorMessage += " Project not found.";
                            throw errorMessage;
                        }
                        if (project.deleted) {
                            errorMessage += " Project is deleted.";
                            throw errorMessage;
                        }
                        card.title = args.title;
                        card.description = args.description;
                        card.hint = args.hint;
                        card.answer = args.answer;
                        return card.save();
                    }
                    catch (error) {
                        throw new GraphQLError(error, {
                            extensions: { code: "" },
                        });
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
            resolve(parent, args, context) {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    const token = (_a = context === null || context === void 0 ? void 0 : context.headers) === null || _a === void 0 ? void 0 : _a.authorization;
                    const userPayload = jwt.verify(token, process.env.SECRET_OR_KEY);
                    let errorMessage = "Could not delete card.";
                    try {
                        const user = yield User.findById(userPayload.id);
                        if (!user) {
                            errorMessage += " User not found.";
                            throw errorMessage;
                        }
                        const card = yield Card.findById(args.cardId);
                        if (!card) {
                            errorMessage += " Card not found.";
                            throw errorMessage;
                        }
                        if (card.deleted) {
                            errorMessage += " Card is deleted.";
                            throw errorMessage;
                        }
                        if (JSON.stringify(card.user) !== JSON.stringify(user._id)) {
                            errorMessage += " Unauthorized.";
                            throw errorMessage;
                        }
                        const project = yield Project.findById(card.project);
                        if (!project) {
                            errorMessage += " Project not found.";
                            throw errorMessage;
                        }
                        if (project.deleted) {
                            errorMessage += " Project is deleted.";
                            throw errorMessage;
                        }
                        card.deleted = true;
                        return card.save();
                    }
                    catch (error) {
                        throw new GraphQLError(error, {
                            extensions: { code: "" },
                        });
                    }
                });
            },
        },
        // Move card forward
        forwardCard: {
            type: CardType,
            args: {
                cardId: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args, context) {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    const token = (_a = context === null || context === void 0 ? void 0 : context.headers) === null || _a === void 0 ? void 0 : _a.authorization;
                    const userPayload = jwt.verify(token, process.env.SECRET_OR_KEY);
                    let errorMessage = "Could not move card forward.";
                    try {
                        const user = yield User.findById(userPayload.id);
                        if (!user) {
                            errorMessage += " User not found.";
                            throw errorMessage;
                        }
                        const card = yield Card.findById(args.cardId);
                        if (!card) {
                            errorMessage += " Card not found.";
                            throw errorMessage;
                        }
                        if (card.deleted) {
                            errorMessage += " Card is deleted.";
                            throw errorMessage;
                        }
                        if (JSON.stringify(card.user) !== JSON.stringify(user._id)) {
                            errorMessage += " Unauthorized.";
                            throw errorMessage;
                        }
                        const project = yield Project.findById(card.project);
                        if (!project) {
                            errorMessage += " Project not found.";
                            throw errorMessage;
                        }
                        if (project.deleted) {
                            errorMessage += " Project is deleted.";
                            throw errorMessage;
                        }
                        if (card.stage < 6) {
                            card.stage++;
                        }
                        return card.save();
                    }
                    catch (error) {
                        throw new GraphQLError(error, {
                            extensions: { code: "" },
                        });
                    }
                });
            },
        },
        // Move card backward
        backwardCard: {
            type: CardType,
            args: {
                cardId: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args, context) {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    const token = (_a = context === null || context === void 0 ? void 0 : context.headers) === null || _a === void 0 ? void 0 : _a.authorization;
                    const userPayload = jwt.verify(token, process.env.SECRET_OR_KEY);
                    let errorMessage = "Could not move card backward.";
                    try {
                        const user = yield User.findById(userPayload.id);
                        if (!user) {
                            errorMessage += " User not found.";
                            throw errorMessage;
                        }
                        const card = yield Card.findById(args.cardId);
                        if (!card) {
                            errorMessage += " Card not found.";
                            throw errorMessage;
                        }
                        if (card.deleted) {
                            errorMessage += " Card is deleted.";
                            throw errorMessage;
                        }
                        if (JSON.stringify(card.user) !== JSON.stringify(user._id)) {
                            errorMessage += " Unauthorized.";
                            throw errorMessage;
                        }
                        const project = yield Project.findById(card.project);
                        if (!project) {
                            errorMessage += " Project not found.";
                            throw errorMessage;
                        }
                        if (project.deleted) {
                            errorMessage += " Project is deleted.";
                            throw errorMessage;
                        }
                        card.stage = 1;
                        return card.save();
                    }
                    catch (error) {
                        throw new GraphQLError(error, {
                            extensions: { code: "" },
                        });
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
