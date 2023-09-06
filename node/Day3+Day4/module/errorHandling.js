export default function errorHandling(error,req,res,next){
    console.log(error)
    if(error.code==11000) return res.status(400).send("email is unique")
    if(error?.details){ 
            const messageArr = error.details.map((err)=>{
              return  err.message
            })
        return res.status(400).json({messageArr})
    }
    if(error instanceof SyntaxError && error.statusCode == 400 && "body" in error){
      res.status(400).json({message:"req JSON maybe not correct"})
    }
    return res.status(500).send("err in server try tomorrow")
}