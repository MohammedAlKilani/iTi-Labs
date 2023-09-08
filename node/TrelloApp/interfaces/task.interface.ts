import { ObjectId } from "mongoose";
import { User } from "./user.interface";


export interface Task{
    _id:ObjectId
    title:string ,
    description:string ,
    status:"toDo"|"doing"|"done",
    userId:ObjectId ,
    assignTo:ObjectId , 
    deadline:Date
}

export type TaskAdd = Omit<Task,"_id">

export type TaskUpdate = Pick<Task,"title"|"description"|"status">

export type TaskWithUserData = Omit<Task,"userId"> & {userId:User}

export interface TaskDao{
    addTask(task:TaskAdd):Promise<Task>,
    updateTask(id:ObjectId,task:TaskUpdate):Promise<Task>,
    deleteTask(id:ObjectId):Promise<Task>,
    getAllTask():Promise<Task>,
    getAllTaskWithUserData():Promise<TaskWithUserData>
}