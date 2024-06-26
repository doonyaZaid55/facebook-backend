

import {Router} from "express"
import * as postController from "./post.controller.js"

const router = Router()


router.post('/addPost' , postController.addPost)
router.get('/getPosts' , postController.getPosts)
router.put('/updatePost' , postController.updatePost)
router.delete('/deletePost' , postController.deletePost)
router.get('/getSpecificPost' , postController.getSpecificPost)






export default router 