"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    profile: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Profile'
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });
module.exports = (0, mongoose_1.model)('User', UserSchema);
