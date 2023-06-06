import express from 'express';

import * as user from './../controllers/userController.js';

// controller functions
//const { loginUser, signupUser } = require('../controllers/userController.js');

const router = express.Router();

// login route
router.post('/login', user.loginUser);

// signup route
router.post('/signup', user.signupUser);

module.exports = { router };
