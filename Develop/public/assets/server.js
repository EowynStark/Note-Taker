const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// middleware to handle JSON data
app.use(express.json());