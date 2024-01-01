const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());
const users = [
  {
    username: "User 1",
    location: "USA",
  },
  {
    username: "User 2",
    location: "Norway",
  },
];
app.get("/users", (req, res) => {
  res.json(users);
});
app.post("/login", (req, res) => {
  //auth user
  const username = req.body.username;
  const user = { name: username };
  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
});
app.listen(3000);
