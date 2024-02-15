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
    text: { type: String, required: [true, 'Tag text is required'] },
    colorHexCode: { type: String, required: [true, 'Color hex code is required'], match: [/^#([0-9A-F]{3}){1,2}$/i, 'Invalid hex color code'] }
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
    fileName: { type: String, required: [true, 'File name is required'] },
    filePath: { type: String, required: [true, 'File path is required'], match: [/^(\/[a-zA-Z0-9_-]+)+$/, 'Invalid file path'] },
    fileSize: { type: Number, required: [true, 'File size is required'], max: [20 * 1024 * 1024, 'File size exceeds limit'] }
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
taskSchema.pre('remove', async function(next) {
  const task = this;
  try {
    // Reassign serial numbers
    await Task.find({ serialNumber: { $gt: task.serialNumber } }).sort({ serialNumber: 1 }).cursor()
      .eachAsync(async doc => {
        doc.serialNumber -= 1;
        await doc.save();
      });

    // Logic for archiving could be added here

    next();
  } catch (error) {
    next(error);
  }
});