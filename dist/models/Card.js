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
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    project: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Project",
        required: true,
    },
    deleted: {
        type: Boolean,
        required: true,
        default: false,
    },
}, { timestamps: true });
module.exports = (0, mongoose_1.model)("Card", CardSchema);
