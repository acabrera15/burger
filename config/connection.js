//import mysql
var mysql      = require('mysql');

//create a connection to mysql Db
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '@Ranger1',
  database : 'burgers_db'
});
 
//starts connection to DB
connection.connect(function(err) {
    if (err) throw err;

});

//export connection
module.exports = connection;