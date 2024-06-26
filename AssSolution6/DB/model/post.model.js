import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../connection.js";

import User from "./user.model.js";

const Post = sequelizeInstance.define(
  "post",
  {
    title: {
      type: DataTypes.STRING,
    },

    content: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);


User.hasMany(Post, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Post.belongsTo(User);

export default Post;
