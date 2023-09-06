import {Schema, model ,ObjectId} from "mongoose";

const postSchema = new Schema({
    title:String,
    content:String ,
     userID : {
       type: ObjectId,
       ref:"user"
    }
},{
    timestamps:true
})


export default model("Post",postSchema)