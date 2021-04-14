
//global variables
var localStorageScores = JSON.parse(localStorage.getItem("initials")) || [] ;
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("maintimer");
var timerstart = document.getElementById("homestart");
var timeLeft = 30;
var highscoreValue = 0;
var currentIndex = 0;
var finalQuestion = quizStart.length;

//when the user clicks the start button the quiz begins
    var startButton = document.getElementById("stbtn").onclick = function () {
        location.href = "./index-questions.html";
    }

// A timer begins counting down from 60
// if the timer reaches 0, the quiz ends
//when the user clicks and answer, the quiz moves onto the next question
// if the user answer is correct log correct and add 1 to score if incorrect add nothing to score and deduct 10 seconds from timer
// when all questions have been answered, end the quiz
// the user should be presented with their final score and the option to enter thier initials
// highscores should be viewable on a highscore page