const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  documentSentiment: {
    magnitude: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;
