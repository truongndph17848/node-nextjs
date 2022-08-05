import User from "../models/auth"
import jwt from 'jsonwebtoken';

export const register = async (request, response) =>{
     const {email,name,password} = request.body
     try {
         const exitUser = await User.findOne({email}).exec()
         if(exitUser){
             return response.status(400).json({
                 message:"User da ton tai"
             })
         }
         const user = await User({email,name,password}).save()
         response.json({
             user:{
                 _id:user._id,
                 name:user.name,
                 email:user.email,
                 role:user.role
             }
         })
     } catch (error) {
         console.log(error);
     }

}
export const login = async (request,response)=>{
    const {email,password} = request.body
    const user = await User.findOne({email}).exec()
    if(!user){
        return response.status(400).json({
            message:"User khong ton tai"
        })
    }
    if(!user.authenticate(password)){
        return response.status(400).json({
            message:"Mat khau khong dung"
        })
    }
    const token = jwt.sign({_id: user._id }, "123456", { expiresIn: 60 * 60})

    response.json({
        token,
        user:{
            _id:user._id,
            email:user.email,
            name:user.name,
            role:user.role
        }
    })
}