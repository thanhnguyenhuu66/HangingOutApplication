const mongoose = require('mongoose');

const Restaurant = mongoose.model('restaurants', {
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  picture: {
    type: String,
  },
  menu: [{

  }],
});

module.exports = Restaurant;
