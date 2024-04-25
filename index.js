require('dotenv').config()
const http = require('http')
const app = require('./src/config/express.config')

const server = http.createServer(app)


server.listen(process.env.API_PORT,'127.0.0.1',(err)=>{
    if(!err){

        console.log(`Server is running at port ${process.env.API_PORT}`)
    }


})