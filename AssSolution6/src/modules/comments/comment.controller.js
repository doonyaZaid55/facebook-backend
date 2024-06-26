import Comment from "../../../DB/model/comment.model.js";
import Post from "../../../DB/model/post.model.js";
import User from "../../../DB/model/user.model.js";



export const addComment = async (req, res) =>{

    const { content, userId, postId} = req.body;

    const user = await User.findOne( {where : {id:userId, loginStatus: true} });

    if (!user){

        return res.json( {message : 'User not found...'} )
    }

    const comment = await Comment.create( {content, userId, postId} )
    res.json({message: 'Comment created Successfully....' ,comment})
}


export const getComments = async (req,res) =>{

    const comments = Comment.findAll();
    res.json( {message: "Comments : .....", comments })
}


export const updateComment = async (req, res)=> {

    const {id} = req.query;
    const {content,userId} = req.body;
    const comment = await Comment.update( {content}, {where : {id , userId}} );

    return comment > 0 ? res.json( {message : 'comment updated successfully...'}) : res.json({message: 'comment not found..'})
}


export const deleteComment = async (req, res)=> {

    const {id} = req.query;
    const {userId} = req.body;
    const comment = await Comment.destroy( {where : {id , userId}} );

    return comment > 0 ? res.json( {message : 'comment Deleted successfully...'}) : res.json({message: 'comment not found..'})
}


export const getUserWithAll = async (req , res) =>{

    const users = await User.findAll( {include : {
        model: Post,
        attributes: ["title"],
        include: {
            model : Comment, attributes : ["content"]
        }
    }} )

    res.json( {message : ' Users : .....', users})
}