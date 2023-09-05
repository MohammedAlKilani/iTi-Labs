import db from "../db/use.db.js"
class Users{

    constructor(){
           
       
    }
    async allUsers(){
        
           const allUsers = await db.find()
        return allUsers 
       
        
    }
   async addUser(user){
    
        const newUser = await db.create(user)
        return newUser
    
        
    }
    async allUsersSortByDate(){
        const allUser = await db.find().sort({createdAt:1})
        return allUser
    }
    async updateUser(id,userReq){
        const userUpdete = await db.findByIdAndUpdate(id,userReq,{new:true})
        return userUpdete
    }

    async deleteUser(id){
        
        const userDeleted = await db.findByIdAndDelete(id)
        return userDeleted
    }

    async getUseById(id){
        const user = await db.findById(id)
        return user
    }

}

export default  Users 
   