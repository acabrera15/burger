var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '@Ranger1',
  database : 'burgers_db'
});
 
connection.connect(function(err) {
    if (err) throw err;

    console.log('SQL DB is connected');
});

module.exports = connection;