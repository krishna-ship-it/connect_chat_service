const ChatRoom = require("../models/chat-room-model");
const createChatRoom = async (req, res, next) => {
  try {
    const participants = req.body.participants;
    const roomType = req.body.roomType;
    if (!participants || participants.length < 1)
      throw new Error("invalid participants");
    if (!roomType) throw new Error("room type is requied");
    const chatRoom = await ChatRoom.create({
      participants,
      roomType,
    });
    res.status(200).json({
      chatRoom,
    });
  } catch (err) {
    console.log(err);
  }
};
const deleteChatRoom = async (req, res, next) => {
  try {
    const roomId = req.params.roomId;
    await ChatRoom.findOneAndDelete({ _id: roomId });
    res.status(200).send();
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  createChatRoom,
  deleteChatRoom,
};
