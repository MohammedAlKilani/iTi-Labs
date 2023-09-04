class Post{

    constructor(){
            Post.db= [{_id:1, body:"kjhkjkhkhjhkj"},
            {_id:2, body:"2423423423424"},
                        
                    ]
       
    }
    allPosts(){
        return Post.db
    }
    addPost(post){
        Post.db.push(post)
        return Post.db
    }
    allPostsSortByBody(){
        const dbToSort = [...Post.db]
        dbToSort.sort((a,b)=>{
            const bodyA = a.body.toUpperCase(); 
            const bodyB = b.body.toUpperCase(); 
            if(bodyA < bodyB){
                return -1
            }else if(bodyA > bodyB){
                return 1
            }else{
                return 0
            }
        })
        return dbToSort
    }
    updatePost(postReq){
        Post.db.forEach((user,i) => {

             if(user._id == postReq._id){
                Post.db[i]={...user,...postReq}
             }
        })
        return Post.db
    }

    deletePost(postReq){
        Post.db.forEach((user,i) => {

            if(user._id == postReq._id){
               Post.db.splice(i,1)
            }
       })
       return Post.db
    }

    getPostBy_Id(_id){
      return  Post.db.find((user)=>{
            return user._id == _id
        })
    }

}

module.exports =  Post
   