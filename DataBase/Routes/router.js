// const express = require('express')
// const myRouter = express.Router()
// const signUpContr = require('../controller/signUpCon')
// const signUpMW = require('../middleware/signUpmw')

// myRouter.post('/signUp', signUpMW.signUp , signUpContr.signUp)


// module.exports = {myRouter}

const express = require('express');
const myRouter = express.Router();

const signUpContr = require('../controller/signUpCon');
const signUpMW = require('../middleware/signUpmw');

// Ensure signUpMW.signUp and signUpContr.signUp exist
myRouter.post('/signUp', signUpMW.signUp, signUpContr.signUp);

// ✅ Correct Export
module.exports = { myRouter };
