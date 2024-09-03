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

    clip_size: {
        type: Number,
        required: true,
    }

});

const Weapon = mongoose.model('Weapon', taskSchema);
module.exports = Weapon;