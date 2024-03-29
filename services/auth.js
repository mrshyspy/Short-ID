import jwt  from "jsonwebtoken";
const secret = "e347%HGj%yug65"
export function setUser(user){
     return jwt.sign({
        _id : user._id,
        email : user.email,
     }, secret)
}
export function getUser(token) {
    return jwt.verify(token, secret);
}


