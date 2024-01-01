const express = require("express");

const app = express();

const PORT = 3001;
app.get("/",(req,res)=> {
    res.send("Welcome to Home page!")
})
app.get("/users",(req,res)=> {
    res.send("Welcome to Users Page")
})
app.get("/users/:id",(req,res)=> {
    res.send(`Viewing user with id ${req.params.id}`)
})
app.post("/create/user",(req,res)=>{
    res.send("Create new user!")
})
app.put("/users/update/:id",(req,res)=>{
    res.send(`Update user ${req.params.id}`);
})
app.put("/users/delete/:id",(req,res)=>{
    res.send(`Delete user ${req.params.id}`);
})
app.listen(PORT,()=> {
    console.log(`Express app listening on port ${PORT}`);
})