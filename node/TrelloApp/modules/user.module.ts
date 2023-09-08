
import { Schema } from "mongoose";

const userSchema = new Schema<User>({
    userName: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age: {
        type:Number,
        required:true
    },
    gender: {
        type:String, 
        enum:["male" , "female"],
        required:true
    },
    phone: {
        type:Number,
        
    },
    isVerified: {
        type:Boolean,
        required:true
    }
})