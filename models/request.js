const mongoose = require('mongoose');

const RequestSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
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
const Request = mongoose.model('Requests', RequestSchema);

module.exports = Request;
