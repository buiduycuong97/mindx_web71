const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: String,
    refreshToken: String,
  },
  { collection: "users", timestamps: true, versionKey: false }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
