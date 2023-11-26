const express = require('express');
const sensorDataController = require('./controllers/sensorDataController');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const host = process.env.MONGO_HOST;
const db = process.env.MONGO_DATABASE;
(async () => {
    try {
        const connectionURI = `mongodb://${username}:${password}@${host}:27017/${db}?authSource=admin`;
        await mongoose.connect(connectionURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('Connected to database');
    } catch (err) {
        console.error(err);
    }
})();

app.get('/api/SensorData', sensorDataController.getAllSensorData);
app.get('/api/SensorData/:id', sensorDataController.getSensorData);
app.post('/api/SensorData', sensorDataController.createSensorData);
app.put('/api/SensorData/:id', sensorDataController.updateSensorData);
app.delete('/api/SensorData/:id', sensorDataController.deleteSensorData);

mongoose.connection.once('open', () => {
    const listener = app.listen(3000, () => {
        console.log(`Listening on port ${listener.address().port}...`);
    })
});