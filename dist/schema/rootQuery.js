"use strict";
// const jwt = require("jsonwebtoken");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { 
// GraphQLObjectType,
// GraphQLID,
GraphQLList,
// GraphQLError,
 } = require("graphql");
// const Profile = require("../models/Profile");
// const Project = require("../models/Project");
// const Card = require("../models/Card");
// const { ProfileType, ProjectType, CardType } = require("./schemaTypes");
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
// export default RootQuery;
module.exports = RootQuery;
