import mongoose from "mongoose"
import express, { json } from "express"
import router from "./router/app.routes.js"


const app = express()
const port = 5000

app.use((req,res,next)=>{
 console.log(req.method,req.url)
 next()
})

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
export default app