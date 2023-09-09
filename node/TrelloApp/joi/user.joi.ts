import joi from "joi"
import { UserLogin, UserSignUp } from "../interfaces/user.interface"

export const userJoiSchemaSignUp =joi.object<UserSignUp>({
    userName: joi.string().min(5).max(30).required(),
    email: joi.string().email({tlds:{allow:["com","net","lol"]}}).required(),
    password: joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).required(),
    age: joi.number().min(18).max(60).required(),
    gender:joi.string().valid("male" , "female").required() ,
    phone: joi.string().pattern(/^0(10|11|12|15)\d{8}$/),
})
export const userJoiSchemaLogeIn =joi.object<UserLogin>({
    
    email: joi.string().email({tlds:{allow:["com","net","lol"]}}).required(),
    password: joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).required(),
    
})