// Create web server
const express = require('express');
const app = express();
const PORT = 4001;

// Use the built-in express body parser middleware
app.use(express.json());

// Import the comments module
const comments = require('./comments');

// Route to get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Route to
