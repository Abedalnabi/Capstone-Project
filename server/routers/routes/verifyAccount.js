const express = require('express');
const emailRouter = express.Router();
const {verifyAccount} = require("../controllers/verifyAccount")

emailRouter.get('/verify/:strEmailToken/', verifyAccount );

module.exports = emailRouter;
