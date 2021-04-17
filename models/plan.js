const mongoose = require('mongoose');

const PlanSchema = mongoose.Schema({
  request: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Request',
    require: true,
  },
  destinations: [{
    type: String,
    default: null,
  }],
  review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
    require: true,
  },
});
const Plan = mongoose.model('Plan', PlanSchema);

module.exports = Plan;
