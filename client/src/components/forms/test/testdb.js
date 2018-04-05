//https://stackoverflow.com/questions/45891998/posting-form-data-to-mysql-using-nodejs-w-express
//https://stackoverflow.com/questions/44872786/sending-data-from-html-form-to-mysql-database-using-node-js

var mysql = require('mysql');

var first_name = 'Anthony';
var last_name = 'Aardvark';
var email = 'anthony.aardvark@gordon.edu';
var pass = 'superSecur3';

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "nostosTest"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO users (fname, lname, email, pass) VALUES ({first_name}, 'Racoon', 'cutecoon@gmail.com', 'racoon4Lyfe')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});