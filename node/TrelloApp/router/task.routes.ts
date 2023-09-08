import {Router} from "express"
const route = Router()

route.route("/post").get().post().patch().delete()