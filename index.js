import express, { urlencoded } from "express";
const app = express();
import cookieParser from "cookie-parser";
import path from "path";
import urlRouter from "./route/urlRouter.js";
import connection from "./connection.js";
import staticRouter from "./route/staticRouter.js"

import authenticateUser from "./middleware/auth.js"


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

connection("mongodb://127.0.0.1:27017/sort-url");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/url", authenticateUser,  urlRouter);
app.use("/" , staticRouter);

app.listen(8000, (req) => {
    res.render("home")
})
