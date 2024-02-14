const express = require('express');
const router = express.Router();
const { registerUser, loginUser, updateUserProfile } = require('../controllers/userController');
const { USER_REGISTERED, USER_LOGGED_IN, USER_PROFILE_UPDATED } = require('../utils/constants');

// Route to handle user registration
router.post('/register', async (req, res) => {
    try {
        const user = await registerUser(req.body);
        res.status(201).json({ message: USER_REGISTERED, user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to handle user login
router.post('/login', async (req, res) => {
    try {
        const user = await loginUser(req.body);
        res.status(200).json({ message: USER_LOGGED_IN, user });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
});

// Route to handle user profile update
router.put('/profile', async (req, res) => {
    try {
        const user = await updateUserProfile(req.user.id, req.body);
        res.status(200).json({ message: USER_PROFILE_UPDATED, user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;