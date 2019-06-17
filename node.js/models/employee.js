const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name: { type: String },
    email: { type: String },
    number: { type:Number },
    designation: { type: String },
    salary: { type: Number }
});

module.exports = { Employee };