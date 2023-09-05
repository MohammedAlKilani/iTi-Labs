import { Router  } from "express"
import {getAllUsers,getAllUsersSorted,getUserById ,addUser , updateUser, deleteUser} from "../controller/user.controller.js"
const router = Router()
router.get("/users",getAllUsers) 
  
 
 router.get("/users/sort",getAllUsersSorted)
  
   
   
 router.route("/user/:id").get(getUserById).patch(updateUser).delete(deleteUser)


router.route("/user").post(addUser)

export default router

