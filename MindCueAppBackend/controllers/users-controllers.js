const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');
const User = require('../models/user');
///////////////////////////////////////////////aywaaa aywaaaa
const sendEmail = require('../services/sendEmail');

const privateKey = 'mysecretkey515';

const getUsers = async (req, res, next) => {
	const email= req.params.email
	let users;
	try {
		users = await User.findOne({email});
	} catch (err) {
		const error = new HttpError(
			'Fetching users failed, please try again later.',
			500
		);
		return next(error);
	}
	// res.json({ users: users.map(user => user.toObject({ getters: true })) });
	res.status(201).send(users)
};

const signup = async (req, res, next) => {
//////////////////////////////////////////////////hathaa 7'ywalyee
// const errors = validationResult(req);

// if (!errors.isEmpty()) {
// return next(
// new HttpError('Invalid inputs passed, please check your data.', 422)
// );
// }
const { name, email, password, validated, licenceID, userType } = req.body;
console.log(req.body)
let existingUser;
try {
existingUser = await User.findOne({ email: email });
} catch (err) {
const error = new HttpError(
'Signing up failed, please try again later.',
500
);
return next(error);
}
if (existingUser) {
const error = new HttpError(
'User exists already, please login instead.',
422
);
return next(error);
}

let hashedPassword;
try {
hashedPassword = await bcrypt.hash(password, 12);
} catch (err) {
const error = new HttpError(
'Could not create user, please try again.',
500
);
return next(error);
}

//////////// generate random otp for email number
function generateOTP(length) {
const characters = '0123456789';
let OTP = '';
for (let i = 0; i < length; i++) {
OTP += characters.charAt(Math.floor(Math.random() * characters.length));
}
return OTP;
}

const otp = generateOTP(4); // Change the length as per requirments

// add 5 minute limit for otp
const otpExpireTime = new Date();
otpExpireTime.setMinutes(otpExpireTime.getMinutes() + 5);

const createdUser = new User({
name,
email,
password: hashedPassword,
validated,
licenceID,
otp,
otpExpireTime,
userType,
});
//////// aywaaa aywaaaa
try {
const userEmail = email;
const subject = 'OTP for Signup';
const text = `Your OTP for signup is: ${otp}`;
await sendEmail(userEmail, subject, text);
await createdUser.save();
} catch (err) {

const error = new HttpError(
'Signing up failed, please try again later.',
500
);
return next(error);
}

let token;
try {
token = jwt.sign(
{ userId: createdUser.id, email: createdUser.email },
privateKey
);
} catch (err) {
const error = new HttpError(
'Signing up failed, please try again later.',
500
);
return next(error);
}

res
.status(201)
.json({ userId: createdUser.id, email: createdUser.email, token: token, userType: createdUser.userType });
};

const verifyEmail = async (req, res, next) => {
	const { email, otp } = req.body;

	let existingUser;

	try {
		existingUser = await User.findOne({ email: email });

		if (!existingUser) {
			const error = new HttpError('User not found.', 404);
			return next(error);
		}

		if (existingUser.isVerified) {
			const error = new HttpError('Email already verified.', 400);
			return next(error);
		}

		// check if otp is expired
		const otpExpireTime = new Date(existingUser.otpExpireTime);
		if (otpExpireTime < new Date()) {
			const error = new HttpError('OTP expired, please try again.', 400);
			return next(error);
		}

		if (existingUser.otp !== otp) {
			const error = new HttpError('Invalid OTP, please try again.', 400);
			return next(error);
		} else {
			existingUser.isVerified = true;
			await existingUser.save();
			res.status(200).json({
				message: 'Email verified successfully.',
				isVerified: existingUser.isVerified,
			});
		}
	} catch (err) {
		const error = new HttpError(
			'Verifying email failed, please try again later.',
			500
		);
		return next(error);
	}
};

const login = async (req, res, next) => {	
	const { email, password } = req.body;
	console.log(req.body)
	let existingUser;

	try {
		existingUser = await User.findOne({ email: email });
	} catch (err) {
		const error = new HttpError(
			'Logging in failed, please try again later.',
			500
		);
		return next(error);
	}

	if (!existingUser) {
		const error = new HttpError(
			'Invalid credentials, could not log you in.',
			404
		);
		return next(error);
	}
	
	let isValidPassword = true;
	try {
		isValidPassword = await bcrypt.compare(password, existingUser.password);
	} catch (err) {
		const error = new HttpError(
			'Could not log you in, please check your credentials and try again.',
			500
		);
		return next(error);
	}
	if (!isValidPassword) {
		const error = new HttpError(
			'Invalid credentials, could not log you in.',
			404
		);
		return next(error);
	}

	let token;
	try {
		token = jwt.sign(
			{ userId: existingUser.id, email: existingUser.email },
			privateKey
		);
	} catch (err) {
		const error = new HttpError(
			'Logging in failed, please try again later.',
			500
		);
		return next(error);
	}
		console.log(existingUser.userType)
	res.json({
		userId: existingUser.id,
		email: existingUser.email,
		token: token,
		userType: existingUser.userType
		
	});
};
const updateUser = async (req, res, next) => {
// check if user exists
const user = await User.findById(req.user.userId);

if (!user) {
const error = new HttpError('Could not find user for this id.', 404);
return next(error);
}
let config= {...req.body}
if(config.password){
	config.password= await bcrypt.hash(config.password, 12)

}

// update user

const updatedUser = await User.findByIdAndUpdate(req.user.userId, config, {
new: true,
runValidators: true,
});


res
.status(200)
.json({ updatedUser: updatedUser.toObject({ getters: true }) });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
exports.verifyEmail = verifyEmail;
exports.updateUser = updateUser;
