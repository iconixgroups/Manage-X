```javascript
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../utils/validator');
const { uploadFile, getFile, deleteFile } = require('../controllers/fileController');

router.post(
  '/api/files',
  protect,
  [
    check('file', 'File is required').not().isEmpty(),
    check('taskId', 'Task ID is required').not().isEmpty(),
  ],
  handleValidationErrors,
  uploadFile
);

router.get('/api/files/:fileId', protect, getFile);

router.delete('/api/files/:fileId', protect, deleteFile);

module.exports = router;
```