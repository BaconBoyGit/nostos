const express = require('express');

// Create our express boilerplate
const app = express();
// Define an environemnt with a port
const port = process.env.PORT || 5000;

// A simple get request which returns a specified string
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

// Returns the port on which the server is running
app.listen(port, () => console.log(`Listening on port ${port}`));