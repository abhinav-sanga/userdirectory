var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String, required: true},
    contact: {type: String, required: true}
});

module.exports = mongoose.model('User', usersSchema);