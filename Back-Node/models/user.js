const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        required: true
    },
    displayName: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', async function(next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.local.password, salt);
        this.local.password = hash;
        next();
    } catch (err) {
        next(err);
    }
});

UserSchema.methods.verifyPassword = function(password, cb) {
        bcrypt.compare(password, this.local.password, (err, isMatch) => {
            if (err) {
                return cb(err);
            }
            cb(null, isMatch);
        });
};

var User = mongoose.model('User', UserSchema);

module.exports = {User};