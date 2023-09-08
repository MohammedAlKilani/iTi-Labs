import { ObjectId } from "mongoose";
export interface User {
    _id:ObjectId,
    userName: string,
    email: string,
    password: string,
    age: number,
    gender: "male" | "female",
    phone?: string,
    isVerified: boolean,
    softDelete:boolean
}
export type UserSignUp = Omit<User,"_id"|"isVerified">
export type UserLogin = Pick<User,"email"|"password">
export type UserUpdate = Pick<User,"age"|"password"|"userName">

export interface UserDao {
    addUser(user:UserSignUp):Promise<User> ,
    findUserByEmail(email:string):Promise<User>,
    updateUser(id:ObjectId,user:UserUpdate):Promise<User>,
    deleteUserById(id:ObjectId):Promise<User>,
    softDeleteUser(id:ObjectId):Promise<User>,
}