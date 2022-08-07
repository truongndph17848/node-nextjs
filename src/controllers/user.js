import User from "../models/auth";
export const useById = async (request,response,next,id) => {
    try {
        const user = await user.findById(id).exec();
        if (!user){
            res.status(400).json({
                message:"Không tìm thấy user"
            })
        }
        request.profile = user;
        request.profile.password = undefined;
        next();
    } catch (error) {
        
    }
    
}
export const listUser = async (req, res) => { 
    try {
        const user = await User.find().sort({createAt: -1});
                res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy tài khoản"
        })
    }
}
export const removeUser = async (request, response)=>{
    const filter ={_id:request.params.id}
    try {
        const user = await User.findOneAndDelete(filter)
        response.json({
            message:"Đã xóa thành công",
            data:user
        });
    } catch (error) {
        response.status(400).json({message:"Không thể xóa"})
        
    }
}