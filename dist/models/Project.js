"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProjectSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    deleted: {
        type: Boolean,
        required: true,
        default: false,
    },
});
module.exports = (0, mongoose_1.model)("Project", ProjectSchema);
