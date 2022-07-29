const express = require("express");
const router = new express.Router();
const connection = require("../db/connection");

// register user data
router.post("/create", (req, res) => {

  console.log(req.body);
}); 

module.exports = router;