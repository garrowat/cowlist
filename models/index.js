var db = require('../db');

module.exports = {
  set: function(callback) {
    console.log(`processing SET request to DB`);
  },
  get: function(callback) {
    console.log(`processing GET request to DB`);

    let queryString = 'SELECT name, description FROM cows;';

    db.query(queryString, (err, results) => {
      callback(err, results);
    });
  },
};