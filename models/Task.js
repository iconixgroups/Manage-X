const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  serialNumber: {
    type: Number,
    required: true,
    unique: true,
    autoIncrement: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Not Started', 'In Progress', 'On Hold', 'Completed'],
    default: 'Not Started'
  },
  category: {
    type: String,
    required: true
  },
  tags: [{
    text: String,
    colorHexCode: String
  }],
  startDate: {
    type: Date,
    required: true,
    validate: {
      validator: function(value) {
        // Ensure startDate is not in the future and adheres to YYYY-MM-DD format for security and consistency
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        return value <= new Date() && dateRegex.test(value.toISOString().substring(0, 10));
      },
      message: 'Start date must be in YYYY-MM-DD format and cannot be in the future.'
    }
  },
  deadlineDate: {
    type: Date,
    required: true,
    validate: {
      validator: function(value) {
        return value >= this.startDate;
      },
      message: 'Deadline date must be after the start date.'
    }
  },
  assignedTo: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  files: [{
    fileName: String,
    filePath: String,
    fileSize: Number
  }],
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  delayedDuration: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

taskSchema.pre('save', function(next) {
  if (this.isNew) {
    this.constructor.countDocuments().then(res => {
      this.serialNumber = res + 1; // Increment and assign serial number
      next();
    });
  } else {
    next();
  }
});

taskSchema.pre('remove', function(next) {
  // Handle the reassignment of serial numbers and archiving logic here
  next();
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;