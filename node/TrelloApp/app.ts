import express ,{Express,RequestHandler} from "express";
const app:Express = express()
const port = process.env.PORT || 3000

app.use((req,res,next)=>{
    console.log("Method:",req.method,"URL:",req.url )
    next()
})

app.get("/api/v1",(req,res)=>{
    res.send("<h1> Hi to my API  I'm Muhammad shaker AlKilany </h1>")
})


app.all("/*",(req,res)=>{
    res.status(404).json({message:`Not Found '${req.url}'`})
})
app.listen(port,()=>{

    console.log(`server run in http://127.0.0.1:${port}/api/v1 `)
})

