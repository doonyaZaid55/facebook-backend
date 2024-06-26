

import {Router} from "express"
import * as userController from "./user.controller.js"
import User from "../../../DB/model/user.model.js"

const router = Router()


router.post('/signUp' , userController.addUser)
router.post('/login' , userController.login)
router.patch('/logout' , userController.logOut)
router.get("/",(req,res)=> res.json({users: User.findAll()}))





export default router 