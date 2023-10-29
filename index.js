// Array of buttons
var buttonColours = ["red", "blue", "green", "yellow"];
// Array will fill up with Simon Sequence
var gamePattern = [];
// Array will fill up with User clicked pattern
var userClickedPattern = [];
// START THE GAME
var started = false;
// Stores the Level
var level = 0;
// Adds keyboad detection to Start the game
$(document).keydown(function () {
  if (!started) {
    // Changes h1
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
// Handler function on button click
$(".btn").click(function () {
  // Stores the id of button that got clicked
  var userChosenColour = $(this).attr("id");
  // User clicked Array
  userClickedPattern.push(userChosenColour);
  //Logs the user clicked pattern as an array
  console.log(userClickedPattern);
  // Play sound from button that user clicked
  playSound(userChosenColour);
  // Animates the clicked button
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});
// Checks the userClickedPattern against the gamePattern
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    // Uses existing function to play (selected sound)
    playSound("wrong");
    // Updates the h1
    $("#level-title").text(
      "Game Over, tenta de novo. Press any key to restart"
    );
    // Adds class to concatenation of id and userChosenColour or randomChosenColour
    $("body").addClass("game-over");
    // Delays the removal of the class
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
  }
}

// Function Creates a new sequence of buttons to be pressed
function nextSequence() {
  // Resets userClickedPattern
  userClickedPattern = [];
  // Adds a level everytime nextSequence is called
  level++;
  // Changes h1 to new level when next sequence is called
  $("#level-title").text("Level " + level);
  // Creates A New Pattern
  var randomNumber = Math.floor(Math.random() * 4);
  // Selects one of the buttonColours
  var randomChosenColour = buttonColours[randomNumber];
  // Add the new number in the gamePattern
  gamePattern.push(randomChosenColour);
  // Flashes the button to show sequence to User
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  // Plays audio when flashes *REFACTORED
  playSound(randomChosenColour);
  // Animates the randomChosenColour
}
// Play correct sound when clicked and when creating new sequence
function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}
// Animation
// Animation for user
function animatePress(currentColour) {
  // Adds class to concatenation of id and userChosenColour or randomChosenColour
  $("#" + currentColour).addClass("pressed");
  // Delays the removal of the class
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
