const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    email: { type: String, required: true },
    description: { type: String, required: true }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact
