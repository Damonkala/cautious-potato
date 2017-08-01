'use strict'

var express = require('express')
var router = express.Router();

var Mongeese = require('../models/Mongeese');

router.get('/', function (req, res) {
	Mongeese.find({}, function (err, mongeese) {
		res.send(mongeese);
	})
})
router.post('/upload', function (req, res) {
	console.log("HOWA", req.body);
	var thisMongoose = new Mongeese(req.body);
	thisMongoose.save(function (err, savedMongoose) {
		res.send("req");
	})
})

module.exports = router;
