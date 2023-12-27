const express = require("express");
const router = express.Router();
const app = express();

router.get("/",(req,res)=> {
    res.send("Users");
})

router.get("/:id",(req,res)=> {
    res.send("Users "+req.params.id);
})

module.exports = router;