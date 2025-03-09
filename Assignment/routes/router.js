const express = require('express');
const router = express.Router();
const mwForEmail = require('../Middleware/emailChecker');
const mwForNumber = require('../Middleware/numberChecker');
const emailsController = require('../Controllers/emailsController');
const numbersController = require('../Controllers/numbersController');



// Routes for Email according to request type :-
// For Post req :
router.post('/email',mwForEmail.emailCheck,emailsController.emailSender);

// For Get req:
router.get('/getEmails',emailsController.allEmails);


// Routes for Number according to request type :-
// For Post req :
router.post('/number',mwForNumber.numCheck,numbersController.numberSender);

// For Get req:
router.get('/getNumbers',numbersController.allNumbers); 



module.exports = router;