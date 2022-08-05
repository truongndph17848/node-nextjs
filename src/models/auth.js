import mongoose from "mongoose";
import {createHmac} from 'crypto';
 const userSchema = new mongoose.Schema({
 name:{
     type:String,
     requierd: true,
 },
 email:{
     type:String,
     required:true
 },
 password:{
     type:String,
     requierd: true
 }

 },{timestamps:true});

userSchema.methods = {
    authenticate(password){
        try {
            return this.password == this.encrytPassword(password)
        } catch (error) {
            console.log(error);
        }
    },
    encrytPassword(password){
        if (!password) return
        try {
            return createHmac("sha256", "123456").update(password).digest('hex');
        } catch (error) {
            console.log(error)
        }
        
    }
}
userSchema.pre("save",function(next){
    try {
        this.password = this.encrytPassword(this.password)
        next()
    } catch (error) {
        
    }
})
export default mongoose.model('User', userSchema);