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
        return value <= new Date();
      },
      message: 'Start date cannot be in the future.'
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