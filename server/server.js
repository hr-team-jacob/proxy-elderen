var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

// Creating an express application
var app = express();

// Using middlewares
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('', function(req, res) {
  res.json({message: "proxy"});
})

var port = 3000;
app.listen(port, function () {
  console.log('Listening on localhost: ' + port);
});