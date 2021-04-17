const mongoose = require('mongoose');

const User = mongoose.model('users', {
    name: {
        type: String,
        default: 'Anonymous',
    },
    email: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

module.exports = User;