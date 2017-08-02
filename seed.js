// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

var db = require('./models');

var new_profile = [
	{
		name: "Zach Maraziti",
		github_link: "https://github.com/Mazkid21",
		github_profile_image: "https://avatars0.githubusercontent.com/u/29286464?v=4&s=460",
		current_city: "Denver",
		
	}

];

var new_mountain = [
	{
		name: "Hayden",
		height: "13,561 ft",
		climbed: "true", 
		Skiied: "true"
	},
	{
		name: "Pyramid",
		height: "14,018 ft",
		climbed: "true", 
		Skiied: "false"
	},
	{
		name: "Sopris",
		height: "12,965 ft",
		climbed: "true", 
		Skiied: "true"
	}


];




db.Profile.remove({}, function(err, profiles){
	console.log("Removed all profiles, YAY");
	db.Profile.create(new_profile, function(err, profiles){
		if(err){
			return console.log("Error: " + err);
		}
		console.log("created the profile: " + profiles);
	});
});


db.Mountain.remove({}, function(err, mountains){
	console.log("Removed all mountains, YAY");
	db.Mountain.create(new_mountain, function(err, mountains){
		if(err){
			return console.log("Error: " + err);
		}
		console.log("created the Mountain: " + mountains);
	});
});


