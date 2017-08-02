// var mongoose = require('mongoose'),
//   Schema = mongoose.Schema;

// var CampsiteSchema = new Schema({
//   description: String
// });

// var Campsite = mongoose.model('Campsite', CampsiteSchema);

// module.exports = Campsite;

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var ProfileSchema = new Schema({
	name: String,
	github_link: String,
	github_profile_image: String,
	current_city: String,
	
		
	

});

console.log(ProfileSchema);

var Profile = mongoose.model('Profile', ProfileSchema);


module.exports = Profile;