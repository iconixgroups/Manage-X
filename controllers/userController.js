const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { USER_REGISTERED, USER_LOGGED_IN, USER_PROFILE_UPDATED } = require('../utils/constants');
const { validateEmail, logActivity } = require('../utils/helpers');

const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, companyName, contactNumber } = req.body;

        if (!validateEmail(email)) {
            return res.status(400).json({ message: 'Invalid email address.' });
        }

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            companyName,
            contactNumber
        });

        await user.save();

        logActivity(USER_REGISTERED, user._id, null, 'User registered successfully.');

        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user.', error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        logActivity(USER_LOGGED_IN, user._id, null, 'User logged in successfully.');

        res.status(200).json({ token, userId: user._id, message: 'User logged in successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in user.', error: error.message });
    }
};

const updateUserProfile = async (req, res) => {
    try {
        const { firstName, lastName, companyName, contactNumber } = req.body;
        const userId = req.userId;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        user.firstName = firstName;
        user.lastName = lastName;
        user.companyName = companyName;
        user.contactNumber = contactNumber;

        await user.save();

        logActivity(USER_PROFILE_UPDATED, user._id, null, 'User profile updated successfully.');

        res.status(200).json({ message: 'User profile updated successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user profile.', error: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
    updateUserProfile
};