


import {Router} from "express"
import * as commentController from "./comment.controller.js"

const router = Router()


router.post('/addComment' , commentController.addComment)
router.get('/getComments' , commentController.getComments)
router.put('/updateComment' , commentController.updateComment)
router.delete('/deleteComment' , commentController.deleteComment)
router.get('/getUserWithAll' , commentController.getUserWithAll)







export default router 