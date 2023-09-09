import joi from "joi"
import { TaskAdd } from "../interfaces/task.interface"

export const taskJoiSchemaSignUp = joi.object<TaskAdd>({
    title: joi.string().min(5).max(50).required(),
    description: joi.string().min(5).max(50).required(),
    status: joi.string().valid("toDo" , "doing" , "done") ,
    userId: joi.string().pattern(/^[0-9a-fA-F]{24}$/).required() ,
    assignTo: joi.string().pattern(/^[0-9a-fA-F]{24}$/).required() ,
    deadline: joi.date().required()
})