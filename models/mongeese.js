'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Mongeese;
// var deepPopulate = require('mongoose-deep-populate')(mongoose);

var mongeeseSchema = Schema({
	name:{ type: String},
	imageUrl: {type: String}
});

// mongeeseSchema.plugin(deepPopulate);

Mongeese = mongoose.model('Mongeese', mongeeseSchema);


module.exports = Mongeese;
