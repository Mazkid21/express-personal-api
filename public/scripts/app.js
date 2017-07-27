console.log("Sanity Check: JS is working!");
var allProfiles = [];

$(document).ready(function(){

// your code

  $.ajax({
    method: 'GET',
    url:  "https://shrouded-wave-26383.herokuapp.com/api/profile",
    success: handleSuccess,
    error: handleError
  });

});

function handleSuccess(json) {
  allProfiles = json;
  render();
}

function handleError(e) {
  console.log('uh oh');
  
}
