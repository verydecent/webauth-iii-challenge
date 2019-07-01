const express = require('express');

const server = express();

server.use(express.json());

// Sanity check
server.get('/', (req, res) => {
  res.json({ proof: "Server live" });
});

module.exports = server;