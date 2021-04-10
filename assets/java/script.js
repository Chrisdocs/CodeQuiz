//create an array which stores questions
var quizStart = [
    
    {question: "To select a specific element in your HTML via JavaScript you would use which method?", answers: { a: "createElement()", b: "querySlector()", c: "getElementById()", d: "appendChild()"}, correctAnswer: "c" },
    
    {question: "test1", answers: { a: "one", b: "two", c: "three", d: "four"}, correctAnswer: "a" },
    
    {question: "test2", answers: { a: "one", b: "two", c: "three", d: "four"}, correctAnswer: "d" },
    
    {question: "test3", answers: { a: "one", b: "two", c: "three", d: "four"}, correctAnswer: "b" },
    
    {question: "This is a question?", answers: { a: "one", b: "two", c: "three", d: "four"}, correctAnswer: "c" },
];

//loop through questions and answers, if "answers" is equal to "corrrectAnswer" return true


var currentIndex = 0;
    
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
    } else {
        console.log("incorrect!");
    }
    // for (var i = 0; i < quizStart.length; i++) {
    //     var answerChosen = quizStart[0].answers[i];
    //     var correctResponse = quizStart[i].correctAnswer;
    //     if (answerChosen === correctResponse) {
    //     console.log("true");
    // }
};



//when the start quiz button is clicked, the current section should be replaced with the first question
document.getElementById("stbtn").addEventListener("click", function startQuizButton() {
    
    var divEl = document.getElementById("qbox");
    var btnEl = document.getElementById("btnbx");
    var startEl = document.getElementById("homestart")
    
    var btnDivA = document.createElement("div");
    var btnDivB = document.createElement("div");
    var btnDivC = document.createElement("div");
    var btnDivD = document.createElement("div");

    var titleSection = document.createElement("h1");
    var textSection = document.createElement("p");

    var abtn = document.createElement("button")
    var bbtn = document.createElement("button")
    var cbtn = document.createElement("button")
    var dbtn = document.createElement("button")
    
    //replaced the initial welcome and start button with the DOM html for first question
    divEl.parentNode.replaceChild(titleSection, divEl);
    startEl.remove("homestart");
    
    //HTML DOM structure for questions
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
    abtn.textContent = quizStart[0].answers.a;
    abtn.setAttribute("id", "answerA");
    
    bbtn.className = "b-btn";
    bbtn.textContent = quizStart[0].answers.b;
    bbtn.setAttribute("id", "answerB");
    
    cbtn.className = "c-btn";
    cbtn.textContent = quizStart[0].answers.c;
    cbtn.setAttribute("id", "answerC");
    
    dbtn.className = "d-btn";
    dbtn.textContent = quizStart[0].answers.d;
    dbtn.setAttribute("id", "answerD");
    
    titleSection.className = "h1-box";
    titleSection.textContent = quizStart[0].question;
    
    textSection.className = "question-text";
    textSection.textContent = "";

    //when each answer button is clicked, the console should return a true or fasle on whether it represents the correct answer, followed by the presentation of the next question
 
    document.getElementById("answerA").addEventListener("click", function clickedA() {
        console.log("clicked");
        var htmlElement = document.getElementById('answerA');
        var testValue = htmlElement.innerText;
        console.log('testValue: ', testValue);
        console.log('typeof: ', typeof testValue);
        answerCheck(testValue);
    });

    document.getElementById("answerB").addEventListener("click", function clickedB() {
        console.log("clicked");
        console.log("clicked");
        var htmlElement = document.getElementById('answerB');
        var testValue = htmlElement.innerText;
        console.log('testValue: ', testValue);
        console.log('typeof: ', typeof testValue);
        answerCheck(testValue);
    });

    document.getElementById("answerC").addEventListener("click", function clickedC() {
        console.log("clicked");
        console.log("clicked");
        var htmlElement = document.getElementById('answerC');
        var testValue = htmlElement.innerText;
        console.log('testValue: ', testValue);
        console.log('typeof: ', typeof testValue);
        answerCheck(testValue);
    });

    document.getElementById("answerD").addEventListener("click", function clickedD() {
        console.log("clicked");
        console.log("clicked");
        var htmlElement = document.getElementById('answerD');
        var testValue = htmlElement.innerText;
        console.log('testValue: ', testValue);
        console.log('typeof: ', typeof testValue);
        answerCheck(testValue);
    });
});

//each question should have a time limit of 60 seconds (60,000 ms)

//each new question should display a boolean value for the previous question at the bottom

//once all questions have been answered, or the timer on a question reaches 0, the user is prensented with thier score

//the option to input user initials should be availble alongside the highscore, and both should be stored locally