const express = require('express');
const parser = require('body-parser');
const app = express();
const db = require('./db');
const models = require('./models');
const port = 3000;

app.use(parser.json());

app.get('/', (req, res) => {
  res.send('MMMMmmooOOoooooOOooooOOOOOooOOooo');
});

app.post('/api/cows', (req, res) => {
  var params = [req.body.name, req.body.description];
  models.set( params, (err, result) => {
    if (err) {
      res.status(400).send(`ERROR: MMMOOooooooooo, ${err}`);
    } else {
      res.json(req.body);
    }
  });
});

app.get('/api/cows', (req, res) => {
  models.get( (err, result) => {
    if (err) {
      res.status(400).send(`ERROR: MMMOOooooooooo, ${err}`);
    } else {
      res.json(result);
    }
  });
});

app.use(express.static(__dirname + './client'));

app.listen(port, () => console.log(`Cowlist app listening on port ${port}!`));