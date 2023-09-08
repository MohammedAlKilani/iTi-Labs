import {Schema,Types} from "mongoose";
import { Task } from "../interfaces/task.interface";


const taskSchema = new Schema<Task>({
        title:{
                type:String,
                require:true
        } ,
        description:{
                type:String,
                require:true
        } ,
        status:{
                type:String,
                enum:["toDo","doing","done"],
                required:true
                },
        userId:{
                type:Types.ObjectId,
                required:true
        } ,
        assignTo:{
                type: Types.ObjectId,
                required: true
        } , 
        deadline:{
                type:Date,
                required:true
        }

})