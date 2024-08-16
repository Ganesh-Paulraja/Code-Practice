const mongoose = require('mongoose')
const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add the contact name"]
  },
  email: {
    type: String,
    required: [true, "Please add the contact email address"],
  },
  phone: {
    types: String,
    required: [true, "Please add the connect phone number"]
  }
}, {
  timestamps: true,
})

module.exports = mongoose.model('Contact', contactSchema);