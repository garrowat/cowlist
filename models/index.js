var db = require('../db');

module.exports = {
  set: function(params, callback) {
    console.log(`processing SET request to DB`);

    let queryString = 'INSERT INTO cows (name, description) VALUES (?, ?)';

    db.query(queryString, params, (err, results) => {
      callback(err, results);
    });
  },
  get: function(callback) {
    console.log(`processing GET request to DB`);

    let queryString = 'SELECT name, description FROM cows';

    db.query(queryString, (err, results) => {
      callback(err, results);
    });
  },
};