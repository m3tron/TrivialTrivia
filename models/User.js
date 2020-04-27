const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  authId: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
