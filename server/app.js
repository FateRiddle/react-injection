// server/app.js
const express = require('express');
const path = require('path');
const app = require('./config');

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'public')))

app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
})

app.get('/:page', (req, res) => {
  const { page } = req.params
  res.sendFile(path.resolve(__dirname, '..', 'public', `${page}.html`));
})

module.exports = app;
