"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CardSchema = new mongoose_1.Schema({
    profile: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Profile'
    },
    word: {
        type: String
    },
    sentence: {
        type: String
    },
    translation: {
        type: String
    },
    stage: {
        type: Number
    }
}, { timestamps: true });
module.exports = (0, mongoose_1.model)('Card', CardSchema);
