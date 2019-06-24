var mysql = require('mysql');

db = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '',
  database: 'cowlist'
});

db.connect( err => {
  if (err) {
    console.log(`ERROR connecting to database: ${err}`);
  } else {
    console.log(`SUCCESS Connected to database!`);
  }
});

module.exports = db;