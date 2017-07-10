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
    // Generate random value for crystals between 1 and 12.
    var num1 = Math.floor(Math.random() * 12) + 1;
    var num2 = Math.floor(Math.random() * 12) + 1;
    var num3 = Math.floor(Math.random() * 12) + 1;
    var num4 = Math.floor(Math.random() * 12) + 1;
    $("#userWins").text(winsCounter);
    $("#userLosses").text(lossesCounter);




    $(document).on("click", function() {

        $("#targetScore").html(randomScore);
        $("#userCounter").html(userCounter);

        $("#firstCrystal").on("click", function() {

            userCounter = userCounter + num1;
            console.log(userCounter);
            $("#userCounter").html(userCounter);
            if (userCounter === randomScore) {
                winsCounter++;
            } else {
                lossesCounter++;
            }
        });

        $("#secondCrystal").on("click", function() {

            userCounter = userCounter + num2;
            console.log(userCounter);
            $("#userCounter").html(userCounter);
            if (userCounter === randomScore) {
                winsCounter++;
            } else {
                lossesCounter++;
            }
        });

        $("#thirdCrystal").on("click", function() {

            userCounter = userCounter + num3;
            console.log(userCounter);
            $("#userCounter").html(userCounter);
            if (userCounter === randomScore) {
                winsCounter++;
            } else {
                lossesCounter++;
            }
        });

        $("#fourthCrystal").on("click", function() {

            userCounter = userCounter + num4;
            console.log(userCounter);
            $("#userCounter").html(userCounter);
            if (userCounter === randomScore) {
                winsCounter++;
            } else {
                lossesCounter++;
            }
        });
    })








})
