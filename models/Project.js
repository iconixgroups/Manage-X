const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  logo: {
    type: String,
    required: false
  },
  colorHexCode: {
    type: String,
    required: true,
    trim: true
  },
  startDate: {
    type: Date,
    required: true
  },
  completionDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Open', 'Close', 'Archive', 'On Hold']
  },
  boqFileAttachments: [{
    type: String
  }],
  textTags: [{
    tag: String,
    colorHexCode: String
  }],
  members: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    accessRole: {
      type: String,
      required: true,
      enum: ['Project Admin', 'Standard', 'Only View']
    }
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;