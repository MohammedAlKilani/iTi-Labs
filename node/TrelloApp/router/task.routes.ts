import {Router} from "express"
import guard from "../middleware/guard"
const route = Router()

route.route("/post").all(guard).get().post().patch().delete()