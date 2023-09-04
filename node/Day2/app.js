const http = require("http")
const URL = require("node:url")
const UserClass =  require("./dao/daoUser")
const PostClass = require("./dao/daoPost")
const userDB =  new UserClass()
const postDB = new PostClass() 


http.createServer((req,res)=>{

    console.log(req.method,  req.url   )
    
 if(req.method=="GET" && req.url=="/users"){
  
 const db = userDB.allUsers()

    res.end(JSON.stringify(db) ) 
 }else if(req.method=="GET" && req.url=="/users/sort"){
  
   const db = userDB.allUsersSortByName()
  
      res.end(JSON.stringify(db) ) 
   }
 else if(req.method=="GET"&&URL.parse(req.url).pathname =="/user"){
 const userId =  new URLSearchParams(URL.parse(req.url).search).get("_id") 
  let user= userDB.getUseBy_Id(userId)
    res.end(JSON.stringify(user))
 }else if(req.method=="POST"&&req.url=="/user"){
    res.statusCode = 201
    req.on("data",(chunk)=>{
      console.log(chunk)
         const user = JSON.parse(chunk) 
       let db =  userDB.addUser(user)
         res.end(JSON.stringify(db))
         
    })
   
 }else if(req.method=="PATCH"&&req.url=="/user"){
   res.statusCode = 201
   req.on("data",(chunk)=>{
     console.log(chunk)
        const user = JSON.parse(chunk) 
      let db =  userDB.updateUser(user)
        res.end(JSON.stringify(db))
        
   })
  
}else if(req.method=="DELETE"&&req.url=="/user"){
   //  res.statusCode = 201
    
    req.on("data",(chunk)=>{
      console.log(chunk)
         const user = JSON.parse(chunk) 
       let db =  userDB.deleteUser(user)
         res.end(JSON.stringify(db))
         
    })
    
   //  res.end("muhammad")
 }else if(req.method=="GET" && req.url=="/posts"){
  
   const db = postDB.allPosts()
  
      res.end(JSON.stringify(db) ) 
   }else if(req.method=="GET" && req.url=="/posts/sort"){
    
     const db = postDB.allPostsSortByBody()
    
        res.end(JSON.stringify(db) ) 
     }
   else if(req.method=="GET"&&URL.parse(req.url).pathname =="/post"){
   const postId =  new URLSearchParams(URL.parse(req.url).search).get("_id") 
    let post= postDB.getPostBy_Id(postId)
      res.end(JSON.stringify(post))
   }else if(req.method=="POST"&&req.url=="/post"){
      res.statusCode = 201
      req.on("data",(chunk)=>{
        console.log(chunk)
           const post = JSON.parse(chunk) 
         let db =  postDB.addPost(post)
           res.end(JSON.stringify(db))
           
      })
     
   }else if(req.method=="PATCH"&&req.url=="/post"){
     res.statusCode = 201
     req.on("data",(chunk)=>{
          const post = JSON.parse(chunk) 
        let db =  postDB.updatePost(post)
        
          res.end(JSON.stringify(db))
          
     })
    
  }else if(req.method=="DELETE"&&req.url=="/post"){
     
      
      req.on("data",(chunk)=>{
        console.log(chunk)
           const user = JSON.parse(chunk) 
         let db =  postDB.deletePost(user)
           res.end(JSON.stringify(db))
           
      })
      
     
   }else{
     res.statusCode = 404
      res.end("not found")
   }

 
}).listen(5000)