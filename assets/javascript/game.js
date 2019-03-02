alert("Challenge me");
// Creates an array that lists out all of the options.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, remaining, and guesses. 
//Guesses holds the letters chosen
var wins = 0;
var losses = 0;
var remain = 9;
var guesses = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("psychic-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var remainText = document.getElementById("remain-text");
var guessText = document.getElementById("guess-text");

//document.onkeypress = function (e) {
  //do the required work
//}

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

  // Determines which key was pressed.
  var userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // Reworked our code from last step to use "else if" instead of lots of if statements.

  // This logic determines the outcome of the game (win/loss), and increments the appropriate number
  if (
    (userGuess === "a") || (userGuess === "b") || (userGuess === "c")
    || (userGuess === "d") || (userGuess === "e") || (userGuess === "f")
    || (userGuess === "g") || (userGuess === "h") || (userGuess === "i")
    || (userGuess === "j") || (userGuess === "k") || (userGuess === "l")
    || (userGuess === "m") || (userGuess === "n") || (userGuess === "o")
    || (userGuess === "p") || (userGuess === "q") || (userGuess === "r")
    || (userGuess === "s") || (userGuess === "t") || (userGuess === "u")
    || (userGuess === "v") || (userGuess === "w") || (userGuess === "x")
    || (userGuess === "y") || (userGuess === "z")

  ) {

    if ((userGuess === computerGuess)) {
      wins++;
    }

    if (userGuess !== computerGuess) {
      losses++;
    }

    //Sends the letter user guesses and decreases the guesses remaining
    if (userGuess !== computerGuess) {
      remain--;
      guesses.push(userGuess);
    }

    if ((wins === 10)) {
      wins -= 10;
      alert("Psychic say - You win! Cheat maybe?");
    }
    if ((remain === 0) && (losses === 9)) {
      remain += 9;
      losses -= 9
      guesses = [];
      alert("Psychic say - You lose!");
    }



    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The psychic chose: " + computerGuess;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    remainText.textContent = "Remaining: " + remain;
    guessText.textContent = "  " + guesses;
  }
}