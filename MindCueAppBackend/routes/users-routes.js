const express = require('express');
const { check } = require('express-validator');
const { ensureToken } = require('../services/secure');

const usersController = require('../controllers/users-controllers');

const router = express.Router();

router.get('/:email', usersController.getUsers);

router.post(
	'/signup',
	[
		check('name').not().isEmpty(),
		check('email')
			.normalizeEmail() // Test@test.com => test@test.com
			.isEmail(),
		check('password').isLength({ min: 6 }),
	],
	usersController.signup
);

router.post('/verifyEmail', usersController.verifyEmail);

router.post('/login', usersController.login);

router.patch('/updateUser', ensureToken, usersController.updateUser);

module.exports = router;
