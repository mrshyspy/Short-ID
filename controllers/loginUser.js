import Login from "../Models/user.js";
const loginUser = (req, res)=>{
   const{name, email, password}=req.body;
   Login.create({
    name,
    email,
    password,
})

return res.render("signin");
}

export default loginUser;