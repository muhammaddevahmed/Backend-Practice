

const express = require('express');
const router = express.Router();
const authMiddleWare = require("../Middleware/ageChecker");
const loginController = require("../Controller/login");
const errorController = require("../Controller/404");

router.post('/user',authMiddleWare.checkAge,loginController.loginUsers);

router.get('/404',errorController.handle404);




module.exports = router;

 