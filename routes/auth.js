const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logActivity } = require('../controllers/authController');
const { USER_REGISTERED, USER_LOGGED_IN, ACTIVITY_LOG_UPDATED } = require('../public/js/utils/constants');

// Route to handle user registration
router.post('/register', async (req, res) => {
    try {
        const user = await registerUser(req.body);
        logActivity(USER_REGISTERED, user._id);
        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: user
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

// Route to handle user login
router.post('/login', async (req, res) => {
    try {
        const user = await loginUser(req.body.email, req.body.password);
        logActivity(USER_LOGGED_IN, user._id);
        res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            data: {
                user: user,
                token: user.generateAuthToken() // Assuming the User model has a method to generate a JWT
            }
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;