const express = require('express');
const app = express();
const db = require('./db');
const models = require('./models');
const port = 3000;

app.get('/', (req, res) => {
  res.send('MMMMmmooOOoooooOOooooOOOOOooOOooo');
});

app.post('/api/cows', (req, res) => {
  res.send('Got a post request!');
});

app.get('/api/cows', (req, res) => {
  models.get((err, result) => {
    if (err) {
      res.status(400).send(`ERROR: MMMOOooooooooo, ${err}`);
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => console.log(`Cowlist app listening on port ${port}!`));