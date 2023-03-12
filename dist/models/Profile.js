"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProfileSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: {
        type: String,
    },
    deleted: {
        type: Boolean,
        required: true,
        default: false,
    },
}, { timestamps: true });
module.exports = (0, mongoose_1.model)("Profile", ProfileSchema);
