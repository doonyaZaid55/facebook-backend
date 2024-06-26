


import bcrypt from 'bcrypt'
import User from '../../../DB/model/user.model.js';





export const addUser = async (req, res) =>{

    const {userName, email, password} = req.body;
    const userExist = await User.findOne({where: {email}} )

    if (userExist){

            return res.json({message:'user already exists...'})
    }

    const hashedPass = bcrypt.hashSync(password, 5)
    const user = await User.create({ userName, email, password:hashedPass});

    res.json({ message: ' user created successfully...', user})

}





export const login = async (req, res ) =>{

    const {email,password} = req.body;
    const user = await User.findOne( {where: {email}})

    if(!user) {
        
        return res.json({message:' user not found...'})
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password)
    if (!isPasswordValid){

        return res.json({message:' InVaolid Password....'})
    }

    const loginStatus = await user.update( {loginStatus : true})
    return res.json({message:'user logged in successfully....' , user})
}






export const logOut = async (req,res) =>{

    const {id} = req.query
    const loginStatus = await User.update( {loginStatus : false} , {where: {id}})

    return res.json({message:'user logged Out successfully....' , loginStatus})


}