



import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../connection.js";
import Post from "./post.model.js";
import User from "./user.model.js";


const Comment = sequelizeInstance.define('comment', {

    content: {
        type:DataTypes.STRING
    },


}
,
    
    {
        timestamps: true,  
    }



)

User.hasMany(Comment,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Post.hasMany(Comment,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Comment.belongsTo(User)
Comment.belongsTo(Post)



export default Comment