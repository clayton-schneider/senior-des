const mongoose = require('mongoose');
const Sample = require('./models/samples')

const password = 1234;
const connection = mongoose.connect('mongodb+srv://clayton-schneider:' + password + '@cluster0-s9wrr.mongodb.net/prototype?retryWrites=true&w=majority',
    { useNewUrlParser: true }
);

connection.then(console.log);

// const sample = new Sample({
//     _id: new mongoose.Types.ObjectId(),
//     serialNo: 123,
//     sampleWeight: 45,
//     coating: 'carbon',
//     substrate: 'nitrogen'
// });

// sample.save()
//     .then(result => console.log(result))
//     .catch(err => console.log(err))