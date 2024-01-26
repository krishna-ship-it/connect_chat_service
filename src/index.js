const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const dotenv = require("dotenv");
dotenv.config();
const { connectDB } = require("./db/db");

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});
const startServer = async () => {
  try {
    await connectDB();
    server.listen(3000, () => {
      console.log("listening on *:3000");
    });
  } catch (err) {
    console.log(err.message);
  }
};

startServer();
