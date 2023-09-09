import { RequestHandler } from "express";
import tryCatchErr from "./tryCatchErr";
import { ResInterface  } from "../interfaces/app.interface";
import jwt from "jsonwebtoken";
import "dotenv/config"
 const guard = tryCatchErr<never,ResInterface<any>>(async(req,res,next)=>{
console.log("in guard")
   
    const token =  req.cookies?.token
    
   if(!token)return res.status(401).json({message:"you are logOut"})

   const tokenData =  jwt.verify(token,process.env.SECRET_KEY!)
if(!tokenData)return res.status(401).json({message:"you are logOut"})
next()
})

export default guard