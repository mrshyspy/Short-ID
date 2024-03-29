import { getUser } from "../services/auth.js";

async function authenticateUser(req, res, next) {
    try {
        // Retrieve user UUID from the cookie
        const userUuid = await req.cookies?.uuid;
        console.log(userUuid)

        // If userUuid is undefined or null, render the "signin" view and return from the middleware
        if (!userUuid) {
            return res.redirect("/signin");
        }

        // Retrieve user based on the UUID
        const user =  getUser(userUuid);
        

        // If user is not found, render the "signin" view and return from the middleware
        if (!user) {
            return res.redirect("/signin");
        }

        // Attach the user object to the request for further processing
        req.user = user;

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        // Handle errors appropriately (e.g., log the error, send an error response)
        console.error("Error in authentication middleware:", error);
        res.status(500).send("Internal Server Error");
    }
}

export default authenticateUser;
