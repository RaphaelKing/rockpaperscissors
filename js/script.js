// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    $("#userChoice").text($("#input").val());
    var computerChoice;
    var winner;
    var randomNumber = Math.random();
    var userChoice = $("#input").val();
    if (randomNumber < .333) {
        computerChoice = "Rock";
    }
    if (randomNumber > .333 && randomNumber < .666 ){
        computerChoice = "Paper";
    }
    if (randomNumber > .666){
        computerChoice = "Scissors";
    }
$("#computerChoice").text(computerChoice);
    if (userChoice === "Rock" && computerChoice === "Scissors") {
        winner = "You Won";
    }
    if (userChoice === "Scissors" && computerChoice === "Rock"){
        winner = "Computer Won";
    }
    if (userChoice === "Rock" && computerChoice === "Paper"){
        winner = "Computer Won";
    }
    if (userChoice === "Rock" && computerChoice === "Rock"){
        winner = "NOO OONNEE";
    }
    if (userChoice === "Paper" && computerChoice === "Scissors"){
        winner = "Computer Won";
    }
    if (userChoice === "Paper" && computerChoice === "Rock"){
        winner = "You Won";
    }
    if (userChoice === "Paper" && computerChoice === "Paper"){
        winner= "NOO OONNEE";
    }
    if (userChoice === "Scissors" && computerChoice === "Paper"){
        winner= "You Won";
    }
    if (userChoice === "Scissors" && computerChoice === "Rock"){
        winner= "Computer Won";
    }
    if (userChoice === "Scissors" && computerChoice === "Scissors"){
        winner= "NOO OONNEE";
    }
$("#result").text(winner);
})






