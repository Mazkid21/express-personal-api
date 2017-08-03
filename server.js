// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

 var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

// app.get('/api/profile', function (req, res) {
//   db.Profile.find()

//     .exec(function(err, profiles){
//     if (err) {return console.log("index error: " + err);}
//     res.json(profiles);
//   });
// });



/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/mazkid21/express_self_api/README.md", // CHANGE ME
    base_url: "http://shrouded-wave-26383.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Profile with my personal api data"}, 
      {method: "POST", path: "/api/mountain", description: "mountians ive hikd"}, // CHANGE ME
      {method: "GET", path: "/api/mountain", description: "get all mountains"},
      {method: "GET", path: "/api/mountain/:name", description: "get mountians by name"}
    ]

  });
});

app.get('/api/profile', function index(req, res) {
  db.Profile.find()
  .exec(function(err, profiles){
    if (err) {return console.log("index error: " + err);}
    res.json(profiles);
  });
});

app.post('/api/mountain', function(req, res){
  // create in DB
  var newMountain = db.Mountain({
    name: req.body.name,
    height: req.body.height,
    climbed: req.body.climbed, 
    Skiied: req.body.Skiied

  });
  // Save to DB
  newMountain.save(function(err, mountains){
    if(err){
      return console.log("Error saving: " + err);
    }
    console.log("Saved: " + mountains);
    res.json(mountains);
  });

});

app.get('/api/mountain', function index(req, res) {
  db.Mountain.find()
  .exec(function(err, mountains){
    if (err) {return console.log("index error: " + err);}
    res.json(mountains);
  });
});

// get mountian by name 
app.get('/api/mountian/:name', function(req, res){
  db.Mountain.findOne({name: req.params.name}, function(err, data){
    if(err){
      return console.log("Search Error: " + err);
    }
    res.json(data);
  });
});




/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
