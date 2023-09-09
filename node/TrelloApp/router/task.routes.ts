import {Router} from "express"
import guard from "../middleware/guard"
import { addTask, deleteTask, getAllTask, updateTask } from "../controller/task.controller"
const route = Router()

route.route("/task").all(guard).get(getAllTask).post(addTask)
route.route("/task/:id").all(guard).patch(updateTask).delete(deleteTask)

export default route