import Post from "../../../DB/model/post.model.js";
import User from "../../../DB/model/user.model.js";



export const addPost = async (req, res)=> {

    const {title, content, UserId} = req.body;

    const user = await User.findOne( {where : {id :UserId, loginStatus:true}})

    if (!user){
        return res.json('User do not loggedIn...')

    }

    const post = await Post.create( {title, content, UserId})

    res.json({message: 'Post created successfully...', post})


}

export const getPosts = async (req, res)=> {

    const posts = await Post.findAll();
    res.json({message: 'Posts : ...', posts})

}

export const updatePost = async (req, res)=> {

    const {id} = req.query;
    const {title, userId} = req.body;
    const post = await Post.update( {title}, {where : {id , userId}} );

    return post > 0 ? res.json( {message : 'post updated successfully...'}) : res.json({message: 'post not found..'})
}


export const deletePost = async (req, res) => {

    const {id} = req.query;
    const {userId} = req.body;
    const post = await Post.destroy( {where : {id , userId}} );

    return post > 0 ? res.json( {message : 'post deleted successfully...'}) : res.json({message: 'post not found..'})
}


export const getSpecificPost = async (req , res) => {

    const post = await Post.findAll( {include : {
        model: User, attributes:  ['userName', 'email']


    }} 

)
    res.json({message:'post : ....' , post})

}