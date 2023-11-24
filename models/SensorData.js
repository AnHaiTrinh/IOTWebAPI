const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sensorDataSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    recieveTime: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

module.exports = mongoose.model('SensorData', sensorDataSchema);