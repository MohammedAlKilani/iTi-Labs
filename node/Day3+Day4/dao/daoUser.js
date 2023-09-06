import db from "../db/use.db.js"
import bcrypt from "bcrypt"
class Users{

    constructor(){
           
       
    }
    async allUsers(){
        
           const allUsers = await db.find({},{password:0})
        return allUsers 
       
        
    }
   async addUser(user){
    
        const newUser = await db.create(user)
        return newUser
    
        
    }
    async allUsersSortByDate(){
        const allUser = await db.find({},{password:0}).sort({createdAt:1})
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
    async getUserBetweenAgeXY(x,y){
    return await db.find({age:{$gt:x,$lt:y}},{password:0})
    }
    async getUserNameStarWithXAndAgeLessThan(x,y){
        var regexp = new RegExp("^"+x);
    return await db.find({userName:regexp,age:{$lt:y}},{password:0})
    }

    async findUserByEmail(email){
        return await db.findOne({email})
    }
    async checkPassword(password , userPasswordInDB){
     return  await bcrypt.compare(password,userPasswordInDB)
    }
}

export default  Users 
   