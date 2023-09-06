import { Router  } from "express"
import {getAllUsers,getAllUsersSorted,getUserById ,addUser , updateUser, deleteUser, signinUser, isAuthorized} from "../controller/user.controller.js"
import { validBody, validparams } from "../module/validate.js"
import userJoi, { userIdJoiSchema, userSineinSchema } from "../joi/user.joi.js"
const router = Router()

router.post("/signup",(req,res)=>{
    res.redirect(307,"/api/v1/user/user")
})
router.post("/signin",validBody(userSineinSchema),signinUser)
router.get("/users",getAllUsers) 
  
 
 router.get("/users/sort",getAllUsersSorted)
  
   
   
 router.route("/user/:id").all(validparams(userIdJoiSchema)).get(getUserById).patch(updateUser).delete(deleteUser)


router.route("/user").post(validBody(userJoi),addUser)
// router.route("/testAuth").get(isAuthorized)

export default router

