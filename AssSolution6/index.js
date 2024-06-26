

import express from 'express'   
import db_connection from './DB/connection.js'
import userRouter from './src/modules/users/user.routes.js'
import postRouter from './src/modules/posts/post.routes.js'
import commentRouter from './src/modules/comments/comment.routes.js'

import User from './DB/model/user.model.js'
import Post from './DB/model/post.model.js'
import Comment from './DB/model/comment.model.js'
const app = express()
const port = 3999

app.use(express.json())
app.use('/users', userRouter)
app.use('/posts', postRouter)
app.use('/comments', commentRouter)


await db_connection()






app.listen(port, () => console.log(`Example app listening on port ${port}!`))