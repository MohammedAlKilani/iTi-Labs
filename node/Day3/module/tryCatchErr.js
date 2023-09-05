export default function (fun){

    return async (req,res,next)=>{
        try {
         await   fun(req,res,next)
        } catch (error) {
            console.log(error)
            // next(error)
            if(error.code==11000) return res.status(400).send("email is unique")
            return res.status(500).send("err in server try tomorrow")
        }
    }
}