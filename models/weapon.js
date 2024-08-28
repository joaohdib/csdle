const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    Name: {
        type: String,
        required: true
    },

    Team: {
        type: String,
        required: true
    },

    Cost: {
        type:Number,
        required: true
    },

    damage: {
        type:Number,
        required: true
    },

    clipSize: {
        type: Number,
        required: true,
        alias: 'Clip Size'
    }

});

const Weapon = mongoose.model('Weapon', taskSchema);
module.exports = Weapon;