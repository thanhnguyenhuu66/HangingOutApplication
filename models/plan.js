const mongoose = require('mongoose');

const PlanSchema = mongoose.Schema({
  request: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Requests',
    require: true,
  },
  destinations: [{
    type: String,
    default: null,
  }],
  review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reviews',
    require: true,
  },
});
const Plan = mongoose.model('Plans', PlanSchema);

module.exports = Plan;
