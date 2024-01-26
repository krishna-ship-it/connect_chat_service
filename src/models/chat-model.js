const mongoose = require("mongoose");
const chatSchema = mongoose.Schema({
  roomId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "room id is required"],
  },
  message: {
    type: String,
    required: ["message is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const model = mongoose.model("Chat", chatSchema);
module.exports = model;
