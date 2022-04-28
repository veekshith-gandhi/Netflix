/** @format */

const express = require("express");
const app = express();

const dotenv = require("dotenv");
const connect = require("./config/db");
dotenv.config();

const authRouter = require("./routes/auth.routes");
const userRouter = require("./routes/user.routes");
const movieRouter = require("./routes/movie.routes");

PORT = process.env.PORT || 8080;
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/movie", movieRouter);

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
