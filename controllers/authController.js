const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { USER_REGISTERED, USER_LOGGED_IN } = require('../utils/constants');
const { validateEmail } = require('../utils/validators');

const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, companyName, contactNumber } = req.body;

        // Validate email
        if (!validateEmail(email)) {
            return res.status(400).json({ message: 'Invalid email address.' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email.' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            companyName,
            contactNumber
        });

        await newUser.save();

        // Emit user registered event
        req.app.get('socketService').emitEvent(USER_REGISTERED, { userId: newUser._id });

        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Server error while registering user.', error });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User does not exist.' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        // Generate JWT token
        const payload = {
            user: {
                id: user._id
            }
        };

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '14d' }, (err, token) => {
            if (err) throw err;
            // Emit user logged in event
            req.app.get('socketService').emitEvent(USER_LOGGED_IN, { userId: user._id });

            res.json({ token });
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error while logging in.', error });
    }
};

module.exports = {
    registerUser,
    loginUser
};