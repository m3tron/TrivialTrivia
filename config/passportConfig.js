const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
require("dotenv").config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/callback",
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      proxy: true,
    },
    async (accessToken, refreshToken, profile, cb) => {
      const authId = profile.id;
      const displayName = profile.name.givenName;
      try {
        let user = await User.findOne({ authId });

        if (!user) {
          user = await User.create({ authId, displayName });
          return cb(null, user);
        }
        return cb(null, user);
      } catch (err) {
        res.status(501).send(`Server error: ${err.message}`);
      }
    }
  )
);
