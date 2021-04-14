//create an array which stores questions
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

//create a timer which counts down from 60, if timer reaches 0, move to the next question and reward no highscoreValue
function countdown() {
    var timeInterval = setInterval(function() {
        timerEl.textContent = timeLeft;
        timeLeft--;
        if(timeLeft < 0) {
            timeLeft++;
            clearInterval(timeInterval);
            console.log("game over!");
            return endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    var divMain = document.getElementById("maindiv");
    var divSecondary = document.getElementById("divsecondary");
    
    divMain.removeChild(divSecondary);

    // function insert() {
    //     var highscoreResults = document.createElement("h3")
    //     highscoreResults.className = "high-score-results"
    //     highscoreResults.setAttribute("id", "hsresults")
    //     highscoreResults.textContent = "You have a score of " + highscoreValue + ".  You can enter your initials below!";
    
    //     var submitForm = document.createElement("form");
        
    //     var enterInitials = document.createElement("input")
    //     enterInitials.className = "enter-initials-input";
    //     enterInitials.setAttribute("id", "enterinitials");
    //     enterInitials.setAttribute("type", "text");
    //     // enterInitials.setAttribute("name", "initials");
    
    //     var initialsSubmit = document.createElement("input")
    //     initialsSubmit.className = "initial-submit";
    //     initialsSubmit.setAttribute("id", "initsubmit");
    //     initialsSubmit.setAttribute("type", "submit");
    
    //     var enterIntDiv = document.createElement("div");
    //     var submitDiv = document.createElement("div");
    
    //     divMain.appendChild(highscoreResults);
    //     divMain.appendChild(submitForm);
    //     submitForm.appendChild(enterIntDiv);
    //     submitForm.appendChild(submitDiv);
    //     enterIntDiv.appendChild(enterInitials);
    //     submitDiv.appendChild(initialsSubmit);

        //when the user enters thier initials, it is saved along with thier score into and array in localStorage
        initialsSubmit.addEventListener('click', function savedArrayValues(event) {
            event.preventDefault();
            var initials = enterInitials.value + ", score = " + highscoreValue;

            function storeTheScores() {
            localStorageScores.push((initials));  
            console.log(localStorageScores);  
            localStorage.setItem("initials", JSON.stringify(localStorageScores));
            if(event) {
                console.log(event);
            }
        };
        storeTheScores();  
    });
}
// insert();


timerstart.onclick = countdown;

function answerCheck(userAnswer) {
    // Crate a variable to hold the currentQuestions Object
    var currentQuestion = quizStart[currentIndex];
    var answers = currentQuestion.answers;
    var correctAnswerKey = currentQuestion.correctAnswer;
    var correctAnswer = answers[correctAnswerKey];
    //if user answer equals the correct answer then true, if not false
    if (userAnswer === correctAnswer) {
        console.log("correct!")
        highscoreValue++;
        console.log(highscoreValue);
    } else {
        timeLeft-= 10;
        console.log("incorrect!");
    }

    currentIndex++;
};

//this function activates the quize and replaced the DOM elements with the question array objects
function startQuestionsButton() {
    
    var mainDiv = document.getElementById("maindiv");
    var divSecondary = document.createElement("div");
    var titleSection = document.createElement("h1");
    var divEl = document.createElement("div");
    var btnEl = document.createElement("div");
    var btnDivA = document.createElement("div");
    var btnDivB = document.createElement("div");
    var btnDivC = document.createElement("div");
    var btnDivD = document.createElement("div");
    var abtn = document.createElement("button")
    var bbtn = document.createElement("button")
    var cbtn = document.createElement("button")
    var dbtn = document.createElement("button")
    var rightWrongDiv = document.createElement("div");
    var rightWrongP = document.createElement("p");

    divSecondary.className = "div-secondary";
    divSecondary.setAttribute("id", "divsecondary");

    titleSection.className = "title-section";
    titleSection.setAttribute("id", "setattribute");
    titleSection.textContent = quizStart[currentIndex].question;

    mainDiv.appendChild(divSecondary);

    divEl.className = "div-el";
    divEl.setAttribute("id", "divel");

    divSecondary.appendChild(divEl);
    divEl.appendChild(titleSection);

    btnEl.className = "btn-el"
    btnEl.setAttribute("id", "btnel")
    divEl.appendChild(btnEl);

    btnEl.appendChild(btnDivA);
    btnEl.appendChild(btnDivB);
    btnEl.appendChild(btnDivC);
    btnEl.appendChild(btnDivD);
    
    btnDivA.appendChild(abtn);
    btnDivA.className = "questions-buttons-a";
    btnDivB.appendChild(bbtn);
    btnDivB.className = "questions-buttons-b";
    btnDivC.appendChild(cbtn);
    btnDivC.className = "questions-buttons-c";
    btnDivD.appendChild(dbtn);
    btnDivD.className = "questions-buttons-d";
    
    abtn.className = "a-btn";
    abtn.textContent = quizStart[currentIndex].answers.a;
    abtn.setAttribute("id", "answerA");
    
    bbtn.className = "b-btn";
    bbtn.textContent = quizStart[currentIndex].answers.b;
    bbtn.setAttribute("id", "answerB");
    
    cbtn.className = "c-btn";
    cbtn.textContent = quizStart[currentIndex].answers.c;
    cbtn.setAttribute("id", "answerC");
    
    dbtn.className = "d-btn";
    dbtn.textContent = quizStart[currentIndex].answers.d;
    dbtn.setAttribute("id", "answerD");
    
    rightWrongDiv.className = "correct-or-incorrect";
    
    rightWrongP.className = "right-wrong-p";
    rightWrongP.textContent =
    
    divEl.appendChild(rightWrongDiv);
    rightWrongDiv.appendChild(rightWrongP); 
    
        // when each answer button is clicked, the console should return a true or fasle on whether it represents the correct answer, followed by the presentation of the next question
        document.getElementById("answerA").addEventListener("click", function clickedA() {
            var htmlElement = document.getElementById('answerA');
            var testValue = htmlElement.innerText;
            answerCheck(testValue);
            mainDiv.removeChild(divSecondary);
            startQuestionsButton();
        });
        
        document.getElementById("answerB").addEventListener("click", function clickedB() {
            var htmlElement = document.getElementById('answerB');
            var testValue = htmlElement.innerText;
            answerCheck(testValue);
            mainDiv.removeChild(divSecondary);
            startQuestionsButton();
        })
        
        document.getElementById("answerC").addEventListener("click", function clickedC() {
            var htmlElement = document.getElementById('answerC');
            var testValue = htmlElement.innerText;
            answerCheck(testValue);
            mainDiv.removeChild(divSecondary);
            startQuestionsButton();
        })
        
        document.getElementById("answerD").addEventListener("click", function clickedD() {
            var htmlElement = document.getElementById('answerD');
            var testValue = htmlElement.innerText;
            answerCheck(testValue);
            mainDiv.removeChild(divSecondary);
            startQuestionsButton();
        })
}



//when the start quiz button is clicked, the current section should be replaced with the first question
document.getElementById("stbtn").addEventListener("click", function startQuizButton() {
    
    var divMain = document.getElementById("maindiv");
    var divBox = document.getElementById("divbox");

    divMain.removeChild(divBox);    
    
    startQuestionsButton();
});

//each new question should display a boolean value for the previous question at the bottom

//once all questions have been answered, the user is prensented with thier score
