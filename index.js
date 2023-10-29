// Array of buttons
var buttonColours = ["red", "blue", "green", "yellow"];
// User clickec pattern
var userClickedPattern = [];
// Handler function on button click
$(".btn").click(function () {
  // User clicked Array
  userClickedPattern.push(userChosenColour);
  // Stores the id of button that got clicked
  var userChosenColour = $(this).attr("id");
  console.log(userClickedPattern);
});
// Array will fill up with Simon Sequence
var gamePattern = [];
// Function
function newSequence() {
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
  // Plays audio when flashes
  var audio = new Audio("./sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
// Adds keyboad detection to Start the game
$(document).keypress(function (event) {
  $("h1").text("Level 1");
});
// Changes h1 and game-over class
$("h1").on("click", function () {
  // Plays wrong audio
  var wrong = new Audio("./sounds/wrong.mp3");
  wrong.play();
  $("#backgroudPage").animate({ backgroundColor: "#4E1402" }, 300);
  $("h1")
    .text("Game Over, Press Any Key to Restart")
    .animate({ opacity: "60%" });
});
