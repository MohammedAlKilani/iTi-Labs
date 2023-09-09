import { ErrorRequestHandler } from "express"
type ResErr = {
   message:string|string[],
   error?:any
}
const errorHandler:ErrorRequestHandler<never,ResErr>= (error,req,res,next )=>{
     if(error){
      if(error.code==11000)return res.status(400).json({ message: 'email is unique',error});
      if(error?.details){ 
         const messageArr:string[] = error.details.map((err: { message: string; })=>{
           return  err.message
         })
     return res.status(400).json({message:messageArr})
 }
 if( error.statusCode == 400 && "body" in error){
   res.status(400).json({message:"req JSON maybe not correct"})
 }
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' ,error});
     }
}
export default errorHandler