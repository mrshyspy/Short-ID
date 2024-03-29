import { v4 } from "uuid";
import { setUser } from "../services/auth.js";

import Login from "../Models/user.js";

const signinUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const loginUser = await Login.findOne({ email : email, password : password });

        if (!loginUser) {
            return res.status(404).send("User not found");
        }
       
       const token =  setUser(loginUser);

        res.cookie("uuid", token);
        res.redirect("/url");
      
    } catch (error) {
        console.error("Error retrieving user by ID:", error);
        res.status(500).send("Internal Server Error");
    }
};

export default signinUser;
