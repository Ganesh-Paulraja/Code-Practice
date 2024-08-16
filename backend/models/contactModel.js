const mongoose = require('mongoose')
const contactSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    reired: true,
    ref: "User",
  },
  userName: {
    type: String,
    required: [true, "Please add the contact name"]
  },
  email: {
    type: String,
    required: [true, "Please add the contact email address"],
  },
  phone: {
    type: String,
    required: [true, "Please add the connect phone number"]
  }
}, {
  timestamps: true,
})

module.exports = mongoose.model('Contact', contactSchema);