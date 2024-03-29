import express from "express";
const router = express.Router();
import signinUser from "../controllers/signinUser.js";
import loginUser from "../controllers/loginUser.js";
router.post("/signin", signinUser);
router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.post("/login", loginUser);
router.get("/login", (req, res) => {
  return res.render("login");
});
export default router;
