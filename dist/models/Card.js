"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CardSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    hint: {
        type: String,
    },
    answer: {
        type: String,
    },
    stage: {
        type: Number,
    },
    profile: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Profile",
    },
    project: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Project",
    },
    deleted: {
        type: Boolean,
        required: true,
        default: false,
    },
}, { timestamps: true });
module.exports = (0, mongoose_1.model)("Card", CardSchema);
