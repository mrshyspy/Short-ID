import { nanoid } from "nanoid";
import User from "../Models/model.js";

const postGenrateNewUrl = async (req, res) => {
  try {
    const body = req.body;
    
    if (!body.url) {
      return res.status(400).send("URL is required");
    }

    const id = nanoid();
    
    await User.create({
      ShortId: id,
      redirectURL: body.url,
    });
    
    res.render("home", {
      shortId: id,
    });
  } catch (error) {
    console.error("Error generating new URL:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default postGenrateNewUrl;
