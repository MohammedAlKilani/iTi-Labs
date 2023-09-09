import {Router} from "express"
import { Verifi, deleteUser, login, logout, signUp, softDelete, updateUser } from "../controller/user.controller"
import { joiValidatorBody } from "../middleware/joiValidator"
import { userJoiSchemaSignUp , userJoiSchemaLogeIn } from "../joi/user.joi"
import guard from "../middleware/guard"

const router = Router()

router.post("/signUp",joiValidatorBody(userJoiSchemaSignUp),signUp)
router.post("/login",joiValidatorBody(userJoiSchemaLogeIn),login)
router.get("/verifie/:token",Verifi)
router.route("/softDelete").all(guard).delete(softDelete).get(softDelete)
router.route("/user").all(guard).patch(updateUser).delete(deleteUser)
router.route("/user/:id").all(guard).patch(updateUser).delete(deleteUser)
router.get("/logout",guard,logout)

export default router