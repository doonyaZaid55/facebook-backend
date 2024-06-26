

import { DataTypes } from "sequelize";
import { sequelizeInstance } from "../connection.js";


const User = sequelizeInstance.define('user', {

    userName: {
        type:DataTypes.STRING
    },

    email: {
        type:DataTypes.STRING,
        unique:true,
    },
    
    password: {
        type:DataTypes.STRING
    },

    loginStatus: {
        type:DataTypes.BOOLEAN,
        defaultValue: false
    }

}
,
    
    {
        timestamps: true,  
    }



)



export default User