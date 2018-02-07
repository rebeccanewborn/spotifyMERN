const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  spotifyId: String,
  displayName: String
});

mongoose.model("users", userSchema);
