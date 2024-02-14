const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  actionType: {
    type: String,
    required: true,
    enum: ['CREATE', 'READ', 'UPDATE', 'DELETE', 'LOGIN', 'LOGOUT', 'REGISTER', 'INVITE'],
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  },
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
});

const ActivityLog = mongoose.model('ActivityLog', activityLogSchema);

module.exports = ActivityLog;