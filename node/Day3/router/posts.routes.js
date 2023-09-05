import { Router} from "express"
import {addPost, deletePost, getAllPosts, getAllPostsSort, getPostById, updatePost} from "../controller/post.controller.js"
 const router = Router()
router.get("/posts",getAllPosts)


router.get("/posts/sort",getAllPostsSort)


 
 
router.route("/post/:id").get(getPostById).patch( updatePost).delete(deletePost)

router.route("/post").post(addPost )

export default router

  