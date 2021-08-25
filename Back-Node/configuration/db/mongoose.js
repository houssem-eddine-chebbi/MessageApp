const mongoose = require('mongoose');
const {DB_URL} = require('../config');

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, { useNewUrlParser: true }, (err) => {
    if (err)
        return console.log('cannot connect to the database', err);
    console.log('successfully connected to the database');
});

module.exports = {mongoose};