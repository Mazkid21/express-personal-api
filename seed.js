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
		pet: [
		{name: "maya",
		type: "dog",
		breed: "pit-bull"},
		{
		name: "yogi",
		type: "dog",
		breed: "golden"
	}

		]
	}

];



db.Profile.create(new_profile, function(err, profile){
	if (err){
		return console.log("Error:", err);
	}
	console.log("Created new profile", profile._id);
	process.exit();

});

