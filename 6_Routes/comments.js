const express = require("express");
const router = express.Router();
const app = express();

router.get("/",(req,res)=> {
    res.send("Comments");
})

router.get("/:id",(req,res)=> {
    res.send("Comments "+req.params.id);
})

module.exports = router;