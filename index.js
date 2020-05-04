const express = require("express");
const path = require("path");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const passport = require("passport");
require("dotenv").config();
require("./config/passportConfig");

const app = express();

const PORT = process.env.PORT || 3001;

mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log("Database Connected");
  }
);

app.use(
  cookieSession({
    maxAge: 15 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(express.json({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// routes
require("./router")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
