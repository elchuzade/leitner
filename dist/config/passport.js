"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose_1 = require("mongoose");
const User = (0, mongoose_1.model)("user");
require("dotenv").config("../.env");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_OR_KEY;
module.exports = (passport) => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
            .then((user) => {
            if (user && !user.verifyEmailString) {
                return done(null, user);
            } // else when no user found send false
            return done(null, false);
        })
            .catch((err) => console.log(err));
    }));
};
