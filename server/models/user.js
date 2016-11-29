var mongoose = require('mongoose');
//user model scheme
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  password: {
    type: String
  }
});

module.exports = {User};
