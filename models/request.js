const mongoose = require('mongoose');

const Request = mongoose.model('request', {
  userId: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  start: {
    type: Date,
    default: new Date(),
  },
  end: {
    type: String,
    default: (new Date()).setHours(new Date().getHours + 2),
  },
  price: {
    type: String,
    require: true,
  },
  parnert: {
    type: String,
    default: 'Alone',
  },
});

module.exports = Request;
