const express = require("express")

const app = express()
const port = 5000

app.use((req,res,next)=>{
 console.log(req.method,req.url)
 next()
})

app.use(express.json())


app.use("/api/v1",require("./routs/app.router"))    
   
app.all("*",(req,res)=>{
  // res.statusCode = 404
    res.status(404).send("not found")
})
 


app.listen(port,()=>{
    console.log(`run in 127.0.0.1:${port}`)
})