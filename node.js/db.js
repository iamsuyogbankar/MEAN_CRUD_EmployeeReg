const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/employee', { useNewUrlParser: true }, (err) => {
    if(!err)
    console.log('MongoDb Connection Succeeded');
    else
    console.log('Error in MongoDb Connection : '+ JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;