import Post from "../dao/daoPost.js";
import user from "../dao/daoUser.js";
import tryCatchErr from "../module/tryCatchErr.js";

import postJoi from "../joi/post.joi.js"
const postDB = new Post()
const userDB = new user()


export const getAllPosts = tryCatchErr(async (req,res)=>{


    const withUserData = req.query.userData
  if(withUserData){
    const db =  await postDB.allPostsWithUserData()
   return res.json( db)
  } 
  const db =await postDB.allPosts()
    
        res.json( db) 


}) 
export const getAllPostsSort =tryCatchErr(async (req,res)=>{
const db = await postDB.allPostsSortByDate()

    res.json(db) 
} ) 

export const getPostById =tryCatchErr(async (req,res)=>{
const postId =  req.params.id
let post= await postDB.getPostById(postId)
if(post){

  res.json(post)
}else{
  res.status(404).send(`not found id:${postId}`)
}
}) 

export const addPost = tryCatchErr(async (req,res)=>{
  const post = req.body 
  const valid =   await postJoi.validateAsync(post)
if(valid){

   const isUser = await  userDB.getUseById(post.userID)
   if(!isUser)return res.status(400).json({message:"id is rong user for id NOT FOUND"})

     let db = await postDB.addPost(post)
     res.status(201).json(db)
       
}
 
})  

export const updatePost = tryCatchErr( async (req,res)=>{
 
 
      const post = req.body 
      const id = req.params?.id
    let db = await postDB.updatePost(id,post)
    if(!db) return res.status(404).json({message:"id post NOT FOUND"})
    res.json(db)
      

})

export const deletePost = tryCatchErr( async (req,res)=>{

 
       const id =  req.params.id
     let db = await postDB.deletePost(id)
     if(!db) return res.status(404).json({message:"id post NOT FOUND"})
       res.json(db)
       
  
})