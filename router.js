const mongoose = require("mongoose");
const Score = require("./models/Score");
const passport = require("passport");
require("dotenv").config();

module.exports = app => {
  // Auth routes
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("http://localhost:3000");
    }
  );

  app.get("/auth/user", (req, res) => {
    res.json(req.user);
  });

  app.get("/auth/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Score routes

  //get all score per difficulty
  app.get("/api/scores", async (req, res) => {});

  //add score
  app.post("/api/score", async (req, res) => {});

  //get score for user
  app.get("/api/score", async (req, res) => {});
};
