import mongoose from "mongoose"
import express, { json } from "express"
import router from "./router/app.routes.js"
import errorHandling from "./module/errorHandling.js"
import 'dotenv/config'
import cookieParser from "cookie-parser"
const app = express()
const port = process.env.PORT || 5000

app.use((req,res,next)=>{
 console.log(req.method,req.url)
 next()
})

app.use(cookieParser())
app.use(json())


app.use("/api/v1",router)    
   
app.all("*",(req,res)=>{
  // res.statusCode = 404
    res.status(404).send("not found")
})

app.listen(port,()=>{
    console.log(`run in 127.0.0.1:${port}`)
})

mongoose.connect("mongodb://localhost:27017/iTiUsersPosts").then(()=>{
  console.log("DB is connected ")
}).catch((err)=>{
  console.log(err)
})

app.use(errorHandling)
export default app