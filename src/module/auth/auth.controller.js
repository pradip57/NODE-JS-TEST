class AuthController {

 register = (req,res,next) => {

    try{

        const payload = req.body

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