const mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    private: {
        type: Boolean,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: String
});

var Message = mongoose.model('Message', MessageSchema);

module.exports = {Message};