
const mongoose = require('mongoose');

// Task schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'completed'],
        default: 'pending'
    }
});

// Task model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
