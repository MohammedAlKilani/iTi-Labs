const express = require("express")
const UserClass =  require("./dao/daoUser")
const PostClass = require("./dao/daoPost")
const userDB =  new UserClass()
const postDB = new PostClass()
const app = express()
const port = 5000

app.use((req,res,next)=>{
 console.log(req.method,req.url)
 next()
})

app.get("/api/v1",(req,res)=>{
 

  res.end("hello to my API") 
}) 
    
 app.get("/api/v1/users",(req,res)=>{
    const db = userDB.allUsers()

    res.end(JSON.stringify(db) ) 
 }) 
  
 
 app.get("/api/v1/users/sort",(req,res)=>{
    const db = userDB.allUsersSortByName()
  
      res.end(JSON.stringify(db) ) 
 })
  
   
   
 app.get("/api/v1/user/:_id",(req,res)=>{

     const userId = req.params._id
      let user= userDB.getUseBy_Id(userId)
        res.end(JSON.stringify(user))
 })
app.post("/api/v1/user",(req,res)=>{
 res.statusCode = 201
    req.on("data",(chunk)=>{
      console.log(chunk)
         const user = JSON.parse(chunk) 
       let db =  userDB.addUser(user)
         res.end(JSON.stringify(db))
         
    })
})
   
   
 app.patch("/api/v1/user",(req,res)=>{

     res.statusCode = 201
     req.on("data",(chunk)=>{
       console.log(chunk)
          const user = JSON.parse(chunk) 
        let db =  userDB.updateUser(user)
          res.end(JSON.stringify(db))
          
     })
 })
  
app.delete("/api/v1/user",(req,res)=>{
 req.on("data",(chunk)=>{
      console.log(chunk)
         const user = JSON.parse(chunk) 
       let db =  userDB.deleteUser(user)
         res.json(db)
         
    })
})
   
    
   
    
   
  app.get("/api/v1/posts",(req,res)=>{
        const db = postDB.allPosts()
        
            res.end(JSON.stringify(db) ) 
  })
  
   
  app.get("/api/v1/posts/sort",(req,res)=>{
const db = postDB.allPostsSortByBody()
    
        res.end(JSON.stringify(db) ) 
  })
    
     
     
  app.get("/api/v1/post/:_id",(req,res)=>{
    const postId =  req.params._id
    let post= postDB.getPostBy_Id(postId)
    if(post){

      res.json(post)
    }else{
      res.status(404).send(`not found _id:${postId}`)
    }
  }) 
   
    app.post("/api/v1/post",(req,res)=>{
      
      res.statusCode = 201
      req.on("data",(chunk)=>{
        console.log(chunk)
           const post = JSON.parse(chunk) 
         let db =  postDB.addPost(post)
         res.json(db)
           
      })
     
   } ) 
  app.patch("/api/v1/post",(req,res)=>{
     res.statusCode = 201
     req.on("data",(chunk)=>{
          const post = JSON.parse(chunk) 
        let db =  postDB.updatePost(post)
        
        res.json(db)
          
     })
  })
    
    
  app.delete("/api/v1/post",(req,res)=>{

      req.on("data",(chunk)=>{
      
        console.log(chunk)
           const user = JSON.parse(chunk) 
         let db =  postDB.deletePost(user)
           res.json(db)
           
      })
  })
app.all("*",(req,res)=>{
    // res.statusCode = 404
      res.status(404).send("not found")
})
     
   

 


app.listen(port,()=>{
    console.log(`run in 127.0.0.1:${port}`)
})