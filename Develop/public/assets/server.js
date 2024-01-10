const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// middleware to handle JSON data
app.use(express.json());

// data storage for potential notes
let notes = [];

// landing page route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// notes page route
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// getting existing notes
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

// saving a new note
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    res.json(newNote);
});