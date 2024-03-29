import mongoose from "mongoose";

const loginSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password : {
      type : Number,
      required : true,
    }
  },
  { timestamps: true }
);
const Login = mongoose.model("login", loginSchema);

export default Login;