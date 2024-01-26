const mongoose = require("mongoose");
const chatRoomSchema = mongoose.Schema({
  participants: {
    type: [Number],
    required: [true, "participants is required"],
    validate: {
      validator: (value) => {
        value.length > 1;
      },
      message: "in one room there must be atleast 2 participants",
    },
  },
  roomType: {
    type: String,
    enum: ["one-to-one", "group"],
    default: "one-to-one",
  },
});
const model = mongoose.model("ChatRoom", chatRoomSchema);
module.exports = model;
