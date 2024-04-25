const express = require('express')

const app = express()


app.use((req,res,next)=>{

    next({codeStatus:404,message:"Not found"})
})

app.use((error,req,res,next)=>{

    const codeStatus = error.code || 500
    const data = error.data || null
    const message = error.message || "Internal server error"

    res.status(codeStatus).json({

        result:data,
        message:message,
        meta:null
    })


})

module.exports = app