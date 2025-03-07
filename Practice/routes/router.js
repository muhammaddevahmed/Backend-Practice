const express = require('express');
const router = express.Router();

const authMiddleWare = require('../Middleware/ageChecker');
const login = require('../controller/login');
const error = require('../controller/404');


router.post('/user',authMiddleWare.checkAge,login.loginUsers);

router.get('/404',error.handle404);

module.exports = router;
