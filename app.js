const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/cool');

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.json())
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use('/js', express.static(__dirname + '/javascripts/'));
app.use('/css', express.static(__dirname + '/css/'));
app.use('/pages', express.static(__dirname + '/templates/'));

// app.use('/mongeese', require('./routes/mongeese'));

app.get('/home', function (req, res) {
res.sendFile(__dirname + '/views/index.html');
})
app.get('/request', function (req, res) {
res.sendFile("Request Success!!!");
})
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
