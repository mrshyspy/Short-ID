import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    ShortId : {
        type : String,
        required : true,
        unique : true,
    },
    redirectURL : {
        type : String,
        required : true,
    }, 
    
    
}, {timestamps: true})
const User = mongoose.model('User', userSchema);

export default User;
