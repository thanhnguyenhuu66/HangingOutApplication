const mongoose = require('mongoose');

const Review = mongoose.model('review', {
  totalRate: {
    type: Number,
    require: true,
  },
  totalReview: {
    type: String,
    require: true,
  },
  destinations: [{
    type: String, // destinationsID
    default: null,
  }],
  destinationsRate: [{
    type: Number,
    require: true,
  }],
});

module.exports = Review;
