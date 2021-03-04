const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: String
});

module.exports.User = mongoose.model('user',schema);