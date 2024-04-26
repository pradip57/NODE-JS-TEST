const Joi = require("joi");
const helmet = require("helmet");
const cors = require("cors");
const express = require("express");
const mainRouter = require("./routing.config");

const app = express();
app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(mainRouter);

app.use((req, res, next) => {
  next({ codeStatus: 404, message: "Not found" });
});

app.use((error, req, res, next) => {
  let codeStatus = error.code || 500;
  let data = error.data || null;
  let message = error.message || "Internal server error";

  if (error instanceof Joi.ValidationError) {
    codeStatus = 422;
    message = "Validation Error";
    data = {};
  }
  const errorDetails = error.details;

  if (Array.isArray(errorDetails)) {
    errorDetails.map((errObject) => {
      data[errObject.context.label] = errObject.message;
    });
  }

  res.status(codeStatus).json({
    result: data,
    message: message,
    meta: null,
  });
});

module.exports = app;
