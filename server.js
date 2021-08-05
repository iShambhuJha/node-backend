
//Lets require import the FS module
var fs = require("fs");

// Express can be used as a web framework for building a rest API
var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors()); // enable CORS to allow requests from frontend

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var nodestatic = require("node-static");

// register handler to return driver data
app.get("/getUsers", function (req, res) {
  fs.readFile("./index.get.json", "utf8", (err, data) => {
    res.send(data);
  });
});

// POST method validating user credentials
app.post('/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if(email=='investor' && password=='investor'){
    res.json({'email': email, 'password': password}); 
  }else{
    res.json({'email': 'invalid', 'password': 'invalid'}); 
  }
   
});
const port = process.env.PORT || 3000;
// Start the REST API server
const server = app.listen(port, function () {
  console.log(`API Server is running`);
});

