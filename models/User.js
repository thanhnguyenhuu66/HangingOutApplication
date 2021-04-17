const mongoose = require('mongoose');

const User = mongoose.model('users', {
  name: {
    type: String,
    default: 'Anonymous',
  },
  passwords: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  addresses: [{
    type: String,
  }],
  phoneNumbers: {
    type: String,
    require: true,
  },
  birthday: {
    type: Date,
    require: true,
  },
  relationshipStatus: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = User;
