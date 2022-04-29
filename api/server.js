/** @format */

const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
const connect = require("./config/db");
dotenv.config();

const authRouter = require("./routes/auth.routes");
const userRouter = require("./routes/user.routes");
const movieRouter = require("./routes/movie.routes");
const listsRouter = require("./routes/list.routes");

PORT = process.env.PORT || 8080;
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/movie", movieRouter);
app.use("/api/lists", listsRouter);

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
