const { Signup, Login } = require('../Controllers/AuthController');
const { UserVerification } = require('../Middlewares/AuthVerification');
const router = require('express').Router();

router.post('/signup', Signup);
router.post('/login', Login);
router.post('/verify', UserVerification); 

module.exports = router;