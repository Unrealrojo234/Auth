const mongoose = require("mongoose");

const detailsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    regNum: {
      type: String,
      required: [true, "Enter your reg number please"],
    },
    userName: {
      type: String,
      required: [true, "Enter a username"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Details = mongoose.model("Detail", detailsSchema);
module.exports = Details;
