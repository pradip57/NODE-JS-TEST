const authCtrl = require('./auth.controller')

const authRouter = require('express').Router()


authRouter.post('/register',authCtrl.register)



module.exports = authRouter