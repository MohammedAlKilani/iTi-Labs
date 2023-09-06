import { Router} from "express"
import {addPost, deletePost, getAllPosts, getAllPostsSort, getPostById, updatePost} from "../controller/post.controller.js"
import { validBody, validparams } from "../module/validate.js"
import postJoi, { postIdJoiSchema } from "../joi/post.joi.js"
 const router = Router()
router.get("/posts",getAllPosts)


router.get("/posts/sort",getAllPostsSort)


 
 
router.route("/post/:id").all(validparams(postIdJoiSchema)).get(getPostById).patch(updatePost).delete(deletePost)

router.route("/post").post(validBody(postJoi),addPost )

export default router

  