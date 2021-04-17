const mongoose = require('mongoose');

const Item = mongoose.model('items', {
  name: {
    type: String,
  },
  picture: [{
    type: String,
  }],
  description: {
    type: String,
    default: 'None',
  },
  price: {
    type: Number,
  },
});

module.exports = Item;
