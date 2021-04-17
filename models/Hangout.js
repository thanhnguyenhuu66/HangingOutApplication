const mongoose = require('mongoose');

const Hangout = mongoose.model('hangouts', {
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  picture: {
    type: String,
  },
  description: {
    type: String,
  },
  menu: [{

  }],
});

module.exports = Hangout;
