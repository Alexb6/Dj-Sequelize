const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const cors = require("cors");

const routes = require("./routes");

const { notFoundHandler, errorLogger, errorHandler } = require("./middlewares");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());
app.use(logger("dev"));

app.use("/api", cors());

app.use("/api", routes);

app.use("*", notFoundHandler);
app.use(errorLogger);
app.use(errorHandler);

module.exports = app;
