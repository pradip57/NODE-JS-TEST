const { setPath, uploader } = require("../../middleware/uploader.middleware");
const { bodyValidator } = require("../../middleware/validator.middleware");
const authCtrl = require("./auth.controller");
const { registerDTO } = require("./auth.dto");

const authRouter = require("express").Router();

authRouter.post(
  "/register",
  setPath("/user"),
  uploader.single("image"),
  bodyValidator(registerDTO),
  authCtrl.register
);

module.exports = authRouter;
