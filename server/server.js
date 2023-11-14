
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// Mongoose Model for Todo Items
const Todo = mongoose.model('Todo', new mongoose.Schema({
    name: String,
    completed: Boolean
}));

// API Routes
// Get all items
app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.send(todos);
});

// Add a new item
app.post('/todos', async (req, res) => {
    const todo = new Todo({
        name: req.body.name,
        completed: false
    });
    await todo.save();
    res.send(todo);
});

// Update an item
app.put('/todos/:id', async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        completed: req.body.completed
    }, { new: true });

    if (!todo) return res.status(404).send('The todo with the given ID was not found.');
    res.send(todo);
});

// Delete an item
app.delete('/todos/:id', async (req, res) => {
    const todo = await Todo.findByIdAndRemove(req.params.id);

    if (!todo) return res.status(404).send('The todo with the given ID was not found.');
    res.send(todo);
});

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
