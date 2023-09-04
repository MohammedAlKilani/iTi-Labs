const express = require("express")
const router = express.Router()
const UserClass =  require("../dao/daoUser")
const PostClass = require("../dao/daoPost")
const userDB =  new UserClass()
const postDB = new PostClass()
router.get("/",(req,res)=>{
 

    res.end("hello to my API") 
  }) 
      
   router.get("/users",(req,res)=>{
      const db = userDB.allUsers()
  
      res.json(db) 
   }) 
    
   
   router.get("/users/sort",(req,res)=>{
      const db = userDB.allUsersSortByName()
    
        res.json(db) 
   })
    
     
     
   router.get("/user/:_id",(req,res)=>{
  
       const userId = req.params._id
        let user= userDB.getUseBy_Id(userId)
        if(user){

            res.json(user)
            
        }else{
            res.status(404).send(`not found user with _id: ${userId}`)
        }
   })
  router.post("/user",(req,res)=>{
   res.statusCode = 201
    
           const user = req.body 
           console.log(req.body)
        let isFind =   userDB.getUseBy_Id(user._id)
        if(isFind) return res.status(400).json({message:"chang _id is unique"})
         let db =  userDB.addUser(user)
           res.json(db)
           
      
  })
     
     
   router.patch("/user",(req,res)=>{
  
       res.statusCode = 201
     
        
            const user = req.body 
          let db =  userDB.updateUser(user)
          res.json(db)
            
      
   })
    
  router.delete("/user",(req,res)=>{
   
           const user = req.body 
         let db =  userDB.deleteUser(user)
           res.json(db)
           
    
  })
     
      
     
      
     
    router.get("/posts",(req,res)=>{
          const db = postDB.allPosts()
          
              res.json(db) 
    })
    
     
    router.get("/posts/sort",(req,res)=>{
  const db = postDB.allPostsSortByBody()
      
          res.json(db) 
    })
      
       
       
    router.get("/post/:_id",(req,res)=>{
      const postId =  req.params._id
      let post= postDB.getPostBy_Id(postId)
      if(post){
  
        res.json(post)
      }else{
        res.status(404).send(`not found _id:${postId}`)
      }
    }) 
     
      router.post("/post",(req,res)=>{
        
        res.statusCode = 201

       
        
        
             const post = req.body 
           let db =  postDB.addPost(post)
           res.json(db)
             
      
       
     } ) 
    router.patch("/post",(req,res)=>{
       res.statusCode = 201
       
            const post = req.body 
          let db =  postDB.updatePost(post)
          
          res.json(db)
            
      
    })
      
      
    router.delete("/post",(req,res)=>{
  
       
             const user = req.body 
           let db =  postDB.deletePost(user)
        
             res.json(db)
             
        
    })


  module.exports = router