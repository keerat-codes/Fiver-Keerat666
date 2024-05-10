const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
id : { type:  String, description: "Required Field", required: true },
firstName : { type:  String, description: "Required Field", required: true },
lastName : { type:  String, description: "Required Field", required: true },
password : { type:  String, description: "Required Field", required: true },
skills : { type:  String, description: "Required Field", required: true },
bio : { type:  String, description: "Required Field", required: true },
projects : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('user', userSchema);