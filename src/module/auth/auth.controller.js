const bcrypt = require('bcryptjs')

class AuthController {

 register = (req,res,next) => {

    try{

        const payload = req.body

        payload.password = bcrypt.hashSync(payload.password,10)
        payload.status = "inactive"


        res.json({
            result:payload,
            message:"Register Success",
            meta:null
        })

    }catch(exception){
        next(exception)
    }

 }   


}

const authCtrl = new AuthController()
module.exports = authCtrl