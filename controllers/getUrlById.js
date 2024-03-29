import User from "../Models/model.js";

const getUrlById = async (req, res) => {
  try {
    const Id = req.params.ShortId; 
    
    const url = await User.findOne({ ShortId: Id });
    if (!url) {
      return res.status(404).send("Url not found");
    }

    res.redirect(url.redirectURL);
  } catch (error) {
    console.error("Error retrieving user by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default getUrlById;
