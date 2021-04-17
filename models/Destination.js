const mongoose = require('mongoose');

const Destination = mongoose.model('destinations', {
  partnerType: {
    type: String,
    default: 'Friend',
  },
  estimatedPrice: {
    type: Number,
    require: true,
  },
  estimatedTime: {
    type: Number,
    require: true,
  },
  openingTime: [{
    type: String,
    require: true,
  }],
  destination: {

  },
  totalRate: {
    type: Number,
    default: 0,
  },
});

module.exports = Destination;
