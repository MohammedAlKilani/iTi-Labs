import { ObjectId } from "mongoose";

export interface Task{
    title:string ,
    description:string ,
    status:"toDo"|"doing"|"done",
    userId:ObjectId ,
    assignTo:ObjectId , 
    deadline:Date
}
