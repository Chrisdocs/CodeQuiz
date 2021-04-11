//create an array which stores questions
var quizStart = [
    
    {question: "To select a specific element in your HTML via JavaScript you would use which method?", answers: { a: "createElement()", b: "querySlector()", c: "getElementById()", d: "appendChild()"}, correctAnswer: "c" },
    
    {question: "test1", answers: { a: "one", b: "two", c: "three", d: "four"}, correctAnswer: "a" },
    
    {question: "test2", answers: { a: "one", b: "two", c: "three", d: "four"}, correctAnswer: "d" },
    
    {question: "test3", answers: { a: "one", b: "two", c: "three", d: "four"}, correctAnswer: "b" },
    
    {question: "This is a question?", answers: { a: "one", b: "two", c: "three", d: "four"}, correctAnswer: "c" },
];

//create a timer which counts down from 60, if timer reaches 0, move to the next question and reward no highscoreValue
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("maintimer");
var timerstart = document.getElementById("homestart");
var timeLeft = 5;

function countdown() {
    var timeInterval = setInterval(function() {
        timerEl.textContent = timeLeft;
        timeLeft--;
        if(timeLeft < 0) {
            timeLeft++;
            clearInterval(timeInterval);
            console.log("game over!");
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    var divMain = document.getElementById("maindiv");
    var divSecondary = document.getElementById("divsecondary");
    
    divMain.removeChild(divSecondary);
    }

timerstart.onclick = countdown;

var currentIndex = 0;
var highscoreValue = 0;
    
function answerCheck(userAnswer) {
    console.log("userAnswer: ", userAnswer);
    // Crate a variable to hold the currentQuestions Object
    var currentQuestion = quizStart[currentIndex];
    var answers = currentQuestion.answers;
    var correctAnswerKey = currentQuestion.correctAnswer;
    console.log('answers: ', answers);
    console.log("correctAnswerKey: ", correctAnswerKey);
    var correctAnswer = answers[correctAnswerKey];
    console.log(correctAnswer);
    //if user answer equals the correct answer then true, if not false
    if (userAnswer === correctAnswer) {
        console.log("correct!")
        highscoreValue++;
        console.log(highscoreValue);
    } else {
        console.log("incorrect!");
    }

    currentIndex++;
    // for (var i = 0; i < quizStart.length; i++) {
    //     var answerChosen = quizStart[0].answers[i];
    //     var correctResponse = quizStart[i].correctAnswer;
    //     if (answerChosen === correctResponse) {
    //     console.log("true");
    // }
};

function startQuestionsButton() {

    var mainDiv = document.getElementById("maindiv");

    var divSecondary = document.createElement("div");
    divSecondary.className = "div-secondary";
    divSecondary.setAttribute("id", "divsecondary");

    var titleSection = document.createElement("h1");
    titleSection.className = "title-section";
    titleSection.setAttribute("id", "setattribute");
    titleSection.textContent = quizStart[currentIndex].question;

    mainDiv.appendChild(divSecondary);

    var divEl = document.createElement("div");
    divEl.className = "div-el";
    divEl.setAttribute("id", "divel");

    divSecondary.appendChild(divEl);
    divEl.appendChild(titleSection);

    var btnEl = document.createElement("div");
    btnEl.className = "btn-el"
    btnEl.setAttribute("id", "btnel")
    divEl.appendChild(btnEl);

    
    var btnDivA = document.createElement("div");
    var btnDivB = document.createElement("div");
    var btnDivC = document.createElement("div");
    var btnDivD = document.createElement("div");
    

    var abtn = document.createElement("button")
    var bbtn = document.createElement("button")
    var cbtn = document.createElement("button")
    var dbtn = document.createElement("button")


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
    
    // when each answer button is clicked, the console should return a true or fasle on whether it represents the correct answer, followed by the presentation of the next question
    document.getElementById("answerA").addEventListener("click", function clickedA() {
        console.log("clicked");
        var htmlElement = document.getElementById('answerA');
        var testValue = htmlElement.innerText;
        console.log('testValue: ', testValue);
        console.log('typeof: ', typeof testValue);
        answerCheck(testValue);
        mainDiv.removeChild(divSecondary);
        startQuestionsButton();
    });
    
    document.getElementById("answerB").addEventListener("click", function clickedB() {
        console.log("clicked");
        console.log("clicked");
        var htmlElement = document.getElementById('answerB');
        var testValue = htmlElement.innerText;
        console.log('testValue: ', testValue);
        console.log('typeof: ', typeof testValue);
        answerCheck(testValue);
        mainDiv.removeChild(divSecondary);
        startQuestionsButton();
    });
    
    document.getElementById("answerC").addEventListener("click", function clickedC() {
        console.log("clicked");
        console.log("clicked");
        var htmlElement = document.getElementById('answerC');
        var testValue = htmlElement.innerText;
        console.log('testValue: ', testValue);
        console.log('typeof: ', typeof testValue);
        answerCheck(testValue);
        mainDiv.removeChild(divSecondary);
        startQuestionsButton();
    });
    
    document.getElementById("answerD").addEventListener("click", function clickedD() {
        console.log("clicked");
        console.log("clicked");
        var htmlElement = document.getElementById('answerD');
        var testValue = htmlElement.innerText;
        console.log('testValue: ', testValue);
        console.log('typeof: ', typeof testValue);
        answerCheck(testValue);
        mainDiv.removeChild(divSecondary);
        startQuestionsButton();
    });
}



//when the start quiz button is clicked, the current section should be replaced with the first question
document.getElementById("stbtn").addEventListener("click", function startQuizButton() {
    
    var divMain = document.getElementById("maindiv");
    var divBox = document.getElementById("divbox");

    divMain.removeChild(divBox);    
    
    startQuestionsButton();
});


    
//each question should have a time limit of 60 seconds (60,000 ms)

//each new question should display a boolean value for the previous question at the bottom

//once all questions have been answered, or the timer on a question reaches 0, the user is prensented with thier score

//the option to input user initials should be availble alongside the highscore, and both should be stored locally