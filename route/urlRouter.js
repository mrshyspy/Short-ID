import express from "express";
import getUrlById from "../controllers/getUrlById.js";
const router = express.Router(); 
import postGenrateNewUrl from "../controllers/postGenrateNewUrl.js";


router.get("/:ShortId", getUrlById);
router.post("/", postGenrateNewUrl);
router.get("/", (req, res) => {
    return res.render("home");
  });

export default router; 
