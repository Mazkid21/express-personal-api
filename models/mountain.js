var mongoose = require('mongoose'), 
Schema = mongoose.Schema;

var mountainSchema = new Schema({
	name: String,
	height: String,
	climbed: Boolean, 
	Skiied: Boolean

});


var Mountain = mongoose.model('Mountain', mountainSchema);

module.exports = Mountain;