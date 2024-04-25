const Joi = require("joi");

const registerDTO = Joi.object({
  name: Joi.string().min(4).max(9).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
  role: Joi.string().pattern(/^(staff|customer)$/).required()
});
module.exports = { registerDTO };
