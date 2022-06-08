const express = require('express');
const morgan = require('morgan');
const toppings = require('./toppings.json');

// constants
const app = express();
const port = process.env.PORT || 8000;

// middleware
app.use(morgan('dev'));

// GET /api/toppings
app.get('/api/toppings', (req, res) => {
  res.json(toppings);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
