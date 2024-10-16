const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    Name: {
        type: String,
        required: true
    }
});

const randomize = mongoose.model('randomize', taskSchema);
module.exports = randomize;