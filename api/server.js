/** @format */

const express = require("express");
const app = express();

const dotenv = require("dotenv");
const connect = require("./config/db");
dotenv.config();

const authRouter = require("./routes/auth.routes");

PORT = process.env.PORT || 8080;
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/", (req, res) => {
  return res.send("hello");
});

const start = async () => {
  await connect();
  app.listen(PORT, () => {
    console.log(`server runing in port : ${PORT}`);
  });
};

module.exports = start;
