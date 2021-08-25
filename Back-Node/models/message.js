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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

var Message = mongoose.model('Message', MessageSchema);

module.exports = {Subscriber: Message};