import {Router} from "express"

const router = Router()

router.post("/signUp")
router.post("/login")
router.route("/user").patch().delete()
router.get("/logout")

export default router