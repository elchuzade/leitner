"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    permission: {
        type: Number,
        required: true,
    },
    deleted: {
        type: Boolean,
        required: true,
        default: false,
    },
}, { timestamps: true });
module.exports = (0, mongoose_1.model)("User", UserSchema);
