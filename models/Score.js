const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
  score: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  user: {
    type: [Schema.Types.ObjecctId],
    ref: "User",
  },
});

const Score = mongoose.model("Score", ScoreSchema);

module.export = Score;
