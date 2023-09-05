import db from "../db/post.db.js"

class Post{

    constructor(){
        
       
    }
   
    async allPosts(){
        
        const allPosts = await db.find()
        
          
        return allPosts
   
    }
    async allPostsWithUserData(){
        
        const allPosts = await db.find().populate('userID');
        
          
        return allPosts
   
    }
    async addPost(post){
        const newPost = await db.create(post)
        return newPost
    }
    async allPostsSortByDate(){
        const allPosts = await db.find().sort({createdAt:1})
        return allPosts
    }
    async updatePost(id,post){
      const postUpdete = await db.findByIdAndUpdate(id,post,{new:true})
        return postUpdete
    }

   async deletePost(id){
        const posteDeleted = await db.findByIdAndDelete(id)
       return posteDeleted
    }

    async getPostById(id){
      const post = await db.findById(id)
      return post
    }

}

export default  Post
   