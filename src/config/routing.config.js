const authRouter = require('../module/auth/auth.router')

const mainRouter = require('express').Router()


mainRouter.use("/auth",authRouter)

module.exports =mainRouter