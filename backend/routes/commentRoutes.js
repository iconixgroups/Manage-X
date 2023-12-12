```javascript
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Comment = require('../models/Comment');
const errorHandler = require('../utils/errorHandler');

// Get all comments
router.get('/api/comments', auth, async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        errorHandler(err, res);
    }
});

// Get a specific comment
router.get('/api/comments/:comment_id', auth, async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.comment_id);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });
        res.json(comment);
    } catch (err) {
        errorHandler(err, res);
    }
});

// Create a new comment
router.post('/api/comments', auth, async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        const savedComment = await newComment.save();
        res.json(savedComment);
    } catch (err) {
        errorHandler(err, res);
    }
});

// Update a comment
router.put('/api/comments/:comment_id', auth, async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.comment_id, req.body, { new: true });
        if (!updatedComment) return res.status(404).json({ message: 'Comment not found' });
        res.json(updatedComment);
    } catch (err) {
        errorHandler(err, res);
    }
});

// Delete a comment
router.delete('/api/comments/:comment_id', auth, async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.comment_id);
        if (!deletedComment) return res.status(404).json({ message: 'Comment not found' });
        res.json({ message: 'Comment deleted' });
    } catch (err) {
        errorHandler(err, res);
    }
});

module.exports = router;
```