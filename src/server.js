const express = require("express");
const cors = require("cors");
const router = require("express").Router();
const { ErrorHandler } = require("./Middlewares/ErrorHandlers");
const { NotFoundError } = require("../lib/appErrors");
require("dotenv").config();
require("./DB/mongoose");
require("express-async-errors");
const rootRouter = require("./routes/index")(router);

const app = express();
const port = 9000 || process.env.PORT;

// creating the app middlewares
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});
app.set("trust proxy", true);
app.use("/api/v1", rootRouter);

app.get("/status", (req, res) => {
  res.send({ message: "server is hot and live" });
});

// if route is not handled up till this point
app.use((req, res, next) => {
  next(new NotFoundError());
})

// app Errors middleware handlers
app.use(ErrorHandler);

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
