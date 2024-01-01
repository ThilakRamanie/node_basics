const express = require("express");
const router = express.Router();
const app = express();
const userRoute = require('./user');
const commentsRoute = require('./comments');

app.use("/users",userRoute);
app.use("/comments", commentsRoute)

app.listen(3000);