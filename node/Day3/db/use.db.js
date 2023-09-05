import {Schema, model} from "mongoose";


const userSchema = new Schema({
    userName:String,
     email:{
        type:String,
        unique:true
     } ,
      password :String,
     age:Number,
     gender:{
        type:String,
        enum:["male","female"]
     },
      phone:String
},{
    timestamps:true
})

export default model("user",userSchema)