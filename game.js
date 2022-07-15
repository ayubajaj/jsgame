var buttoncolors = ["blue", "green", "red", "yellow"];
var gamepattern = [];
var userclicked = [];
var count = false;
var level = 0;
$(document).keypress(function() {
  if (!count) {
    $("#level-title").text("level" +"  "+ level);
    nextsequence();
    count = true;
  }

});
$(".btn").click(function() {
  var userchosencolor = $(this).attr("id");
  userclicked.push(userchosencolor);
  playsound(userchosencolor);
  addanimation(userchosencolor);
  checkanswer(userclicked.length - 1);
});

function checkanswer(currlevel) {
  if (gamepattern[currlevel] === userclicked[currlevel]) {
    console.log("sucess");
    if (gamepattern.length === userclicked.length) {
      setTimeout(function() {
        nextsequence();

      }, 1000);
    }
  } else {
    console.log("wrong");
    playsound("wrong");
    $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
       $("#level-title").text("Game Over, Press Any Key to Restart");
       gameorver();
  }
}

function nextsequence() {
  level = level + 1;
  $("#level-title").text("level" +"  " +level);
  var random = Math.floor((Math.random() * 3) + 1);

  var randomchossencolor = buttoncolors[random];

  gamepattern.push(randomchossencolor);
  $('#' + randomchossencolor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(randomchossencolor);




}

function playsound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function addanimation(currentcolor) {
  $("#" + currentcolor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentcolor).removeClass("pressed");
  }, 100);
}
function gameorver()
{

   gamepattern = [];
   userclicked = [];
   count = false;
   level = 0;
}
