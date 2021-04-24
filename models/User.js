const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Anonymous',
  },
  password: {
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
  phoneNumber: {
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

const User = mongoose.model('Users', UserSchema);

module.exports = User;
