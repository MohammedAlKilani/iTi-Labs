import {Schema, model ,ObjectId} from "mongoose";

const postSchema = new Schema({
    title:{
        type: String,
        require:true
     },
    content:{
       type: String,
       require:true
    } ,
     userID : {
       type: ObjectId,
       ref:"user",
       require:true
    }
},{
    timestamps:true
})


export default model("Post",postSchema)