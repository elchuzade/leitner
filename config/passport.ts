const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
// import { ExtractJwt } from "passport-jwt";

import { model } from "mongoose";
const User = model("user");
require("dotenv").config("../.env");

const opts: any = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_OR_KEY;

module.exports = (passport: any) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload: any, done: any) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user && !user.verifyEmailString) {
            return done(null, user);
          } // else when no user found send false
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};
