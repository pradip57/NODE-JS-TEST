const { bodyValidator } = require('../../middleware/validator.middleware')
const authCtrl = require('./auth.controller')
const { registerDTO } = require('./auth.dto')

const authRouter = require('express').Router()


authRouter.post('/register',bodyValidator(registerDTO),authCtrl.register)



module.exports = authRouter