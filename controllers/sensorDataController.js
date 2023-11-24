const SensorData = require('../models/SensorData');

const getAllSensorData = async (req, res) => {
    const sensorData = await SensorData.find();
    if(!sensorData) {
        return res.status(204).json({ message: 'No sensorData found' });
    }
    return res.status(200).json(sensorData);
}

const getSensorData = async (req, res) => {
    if (!req?.params?.id) {
        return res.status(400).json({ message: 'No ID provided' });
    }
    const sensorData = await SensorData.findById(req.params.id);
    if(!sensorData) {
        return res.status(204).json({ message: `No sensorData found with ID: ${req.params.id}` });
    }
    return res.status(200).json(sensorData);
}

const createSensorData = async (req, res) => {
    if (!req?.body?.name || !req?.body?.value || !req?.body?.recieveTime) {
        return res.status(400).json({ message: 'All fields must be provided!' });
    }
    try {
        const sensorData = await SensorData.create({
            name: req.body.name,
            value: req.body.value,
            recieveTime: req.body.recieveTime,
        });
        return res.status(201).json(sensorData);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
}

const updateSensorData = async (req, res) => {
    if(!req?.params?.id) {
        return res.status(400).json({ message: 'No ID provided' });
    }
    const sensorData = await SensorData.findById(req.params.id);
    
    if(!sensorData) {
        return res.status(204).json({ message: `No sensorData found with ID: ${req.params.id}` });
    }
    
    if (!req?.body?.name && !req?.body?.value && !req?.body?.recieveTime) {
        return res.status(400).json({ message: 'No data provided' });
    }

    if (req?.body?.name) {
        sensorData.name = req.body.name;
    }
    if (req?.body?.value) {
        sensorData.value = req.body.value;
    }
    if (req?.body?.recieveTime) {
        sensorData.recieveTime = req.body.recieveTime;
    }
    const result = await sensorData.save();
    return res.json(result);
}

const deleteSensorData = async (req, res) => {
    if(!req?.params?.id) {
        return res.status(400).json({ message: 'No ID provided' });
    }
    const sensorData = await SensorData.findById(req.params.id);
    if(!sensorData) {
        return res.status(204).json({ message: `No sensorData found with ID: ${req.params.id}` });
    }
    await sensorData.remove();
    return res.staus(204).json({ message: 'SensorData deleted successfully!' });
}

module.exports = {
    getAllSensorData,
    getSensorData,
    createSensorData,
    updateSensorData,
    deleteSensorData,
}