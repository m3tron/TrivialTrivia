const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3001;

mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log("Database Connected");
  }
);

app.use(express.json({ extended: false }));

app.use("/api", require("./routes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
