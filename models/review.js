const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
  totalRate: {
    type: Number,
    require: true,
  },
  totalReview: {
    type: String,
    require: true,
  },
  destinations: [{
    type: mongoose.Schema.Types.ObjectId, // destinationsID
    ref: 'Destinations',
    default: null,
  }],
  destinationsRate: [{
    type: Number,
    require: true,
  }],
});
const Review = mongoose.model('Reviews', ReviewSchema);

module.exports = Review;
