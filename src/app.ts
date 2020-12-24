/* Node.js imports */
import path from "path";

/* Express.js imports */
import express from "express";
import cookieParser from "cookie-parser";

/* Module imports */
import logger from "morgan";
import nunjucks from "nunjucks";

/* 
  Routes imports
  TODO: make router index file that requires files and just import that file
*/
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

/* Declare app */
const app = express();

app.set("view engine", "html");
nunjucks.configure("src/views", {
  autoescape: true,
  express: app,
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

export default app;