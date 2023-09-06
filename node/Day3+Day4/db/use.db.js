import {Schema, model} from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema({
    userName:String,
     email:{
        type:String,
        unique:true,
        require:true
     } ,
      password :{
         type:String,
      require:true
      },
     age:Number,
     gender:{
        type:String,
        enum:["male","female"]
     },
      phone:String
},{
    timestamps:true
})
userSchema.pre("save",async function(){

 const salt =   await  bcrypt.genSalt(10);
 const hash =  await bcrypt.hash(this.password, salt)
      this.password = hash
})


export default model("user",userSchema)