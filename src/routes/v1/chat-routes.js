const express = require("express");
const { createChatRoom } = require("../../controllers/chat-controllers");
const router = express.Router();
router.route("/create-chat-room").post(createChatRoom);
module.exports = router;
