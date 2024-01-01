const express=require('express');
const app = express();
app.use(logger);
app.get("/",(req,res)=> {
    res.send("Home Page");
})
app.get("/users",auth,(req,res)=> {
    console.log(req.admin)
    res.send("Users Page");
})
function logger(req,res,next) {
    console.log('Logger')
    next();
}
function auth(req,res,next) {
    if(req.query.admin === "true") {
        req.admin = true;
        next();
    } else {
        res.send("No privilege to perform actions");
    }
}
app.listen(3000);