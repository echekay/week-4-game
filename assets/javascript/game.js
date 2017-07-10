$(document).ready(function() {



// ----------------------------------------
    // Displays users total wins amount.
   	var winsCounter = 0;
    // Displays users total losses.
   	var lossesCounter = 0;
    // Users score counter.
   	var userCounter = 0;
    // Generate random value between 19 and 120.
    var randomScore = Math.floor(Math.random() * 101) + 19;


    $("#targetScore").html(randomScore);

    for (i = 0; i < 4; i++) {
      // Generate random value for crystal image between 1 and 12.
      var randomCrystalValue = Math.floor(Math.random() * 12) + 1;
      $(".crystal").attr("data-crystalvalue", [i]);

    }
  




// ------------------------------------------------------------
	// if (parseInt(userCounter) === targetScore) {
      // ; Might not need the parseInt if im not grabbing a string value to convert it to a number value.
    // }

    // else if (userCounter >= targetScore) {
      // alert("You lose!!");
    // }


})

// So as webpage gets loaded:
// Generate random value for targetscore.
// Assign the variable from the random value to the div where it will be displayed.
// Generate random values for each crystal image
// Assign each random value to the image.
// Document when the user clicks on the image.
// Add the value of each image click to the userCounter.
// If the value equals the value of the targetscore, display win message and update wins counter.
// If the value exceeds the value of targetscore, display loss meassage and update counter.
// Reset all values and start game over.




   
