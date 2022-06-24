const express = require('express');

var app=express();
app.set('view engine', 'jade');
app.get('/', function (req,res){

});
var server = app.listen(3000, function(){

});



const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

const mysql = require("mysql");

const connection =  mysql.createConnection({
	connectionLimit : 100,
	host : "localhost",
	user : "root",
	password : "",
	database: "node_test", 
	debug : false,
});


connection.connect((err) => {
	  if (err) throw err;
	  console.log('Connected to MySQL Server!');
});


// app.use((err, req, res, next) => {
// 	res.status(500).send('Something broke!');
// });

// router.get('/home', (req,res) => {
// 	// res.send("Hello World, This is home router");
// 	res.send("OK");
// });

// router.get('/profile', (req,res) => {
// 	res.send('Hello World, This is profile router');
// });


// router.get('/login', (req,res) => {
// 	res.send(' Hello World, This is login router');
// });

// app.use(bodyParser.json());
// app.use('/', router);
// app.listen(process.env.port || 3000);


console.log('Web Server is listening at port '+ (process.env.port || 3000));