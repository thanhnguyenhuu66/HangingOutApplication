const mongoose = require('mongoose');

const Plan = mongoose.model('plan', {
  requestId: {
    type: String,
    require: true,
  },
  destinations: [{
    type: String,
    default: null,
  }],
  reviewId: {
    type: String,
    require: true,
  },
});

module.exports = Plan;
