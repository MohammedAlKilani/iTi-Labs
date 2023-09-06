import { Router } from "express"
import userRouter from "./user.routes.js"
import postRouter from "./posts.routes.js"
const router = Router()

router.get("/",(req,res)=>{
 

    res.end("hello to my API") 
  }) 
      
   
     
      
router.use("/user",userRouter)
router.use("/post",postRouter)
      
     


  export default router
  export const test = "kjjj"