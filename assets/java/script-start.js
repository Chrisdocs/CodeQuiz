// Question array
var quizStart = [
    
    {
    question: "To select a specific element in your HTML via JavaScript you would use which method?", 
    answers: { 
        a: "createElement()", 
        b: "querySlector()", 
        c: "getElementById()", 
        d: "appendChild()"
            }, 
    correctAnswer: "c" 
    },
    {
    question: "Which method do you use to create a DOM element in JavaScript?", 
    answers: { 
        a: "createElement()", 
        b: "getElementbyId()", 
        c: "localStorage.setitem()", 
        d: "appendChild()"
            }, 
    correctAnswer: "a" 
    },
    {
    question: "What is the proper syntax for a for loop?", 
    answers: { 
        a: "(i = var 0; var < data.length; var++)", 
        b: "(var i = 0; i = data.length; i++)", 
        c: "(var = i; i < data.length; i++)", 
        d: "(var i = 0; i < data.length; i++)"
            }, 
    correctAnswer: "d" 
    },
    {
    question: "Other than the JavaScript method to create an element, what other way can you insert elements and data into your html?", 
    answers: { 
        a: "innerDIV", 
        b: "innerHTML", 
        c: "addHTML", 
        d: "addDIV"
            }, 
    correctAnswer: "b" 
    },
    {
    question: "what method can you use in your console to check to see what value a variable returns?", 
    answers: { 
        a: "console.()", 
        b: "var.log()", 
        c: "console.log()", 
        d: "log.dir()"
            }, 
    correctAnswer: "c" 
    },
];

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