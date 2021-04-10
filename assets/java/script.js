//create an array which stores questions
var quizStart = [
    
    {question: "To select an element in your HTML via JavaScript you would use which method?", answers: { a: "createElement()", b: "querySlector()", c: "getElementById()", d: "appendChild()"}, correctAnswer: "c" },
    
    {question: "test1", answers: { a: "one", b: "two", c: "three", d: "four"}, correctAnswer: "a" },
    
    {question: "test2", answers: { a: "one", b: "two", c: "three", d: "four"}, correctAnswer: "d" },
    
    {question: "test3", answers: { a: "one", b: "two", c: "three", d: "four"}, correctAnswer: "b" },
    
    {question: "This is a question?", answers: { a: "one", b: "two", c: "three", d: "four"}, correctAnswer: "c" },
];


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
    
    divEl.parentNode.replaceChild(titleSection, divEl);
    startEl.remove("homestart");
    // btnEl.remove("stbtn");
    
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

    document.getElementById("btn").addEventListener("click", function answerSelection() {
        console.log("hello");
    });
});

    

// var questionText = quizStart[0].question;
// var asnwerbuttons = quizStart[0].answers;
// var correctResponse = quizStart[0].correctAnswer;
// if (answerSelection() === correctResponse) {
//     console.log("correct")
// }
//loop through the array of questions when each question is asnwered, replacing the DOM elements with updated values
// for (var i = 0; i < quizStart.length; i++) {
// }

//each question should have a time limit of 60 seconds (60,000 ms)

//when a questions answer is selected, it should log a true or false and replace the section with the html for the new question

//each new question should display a boolean value for the previous question at the bottom

//once all questions have been answered, or the timer on a question reaches 0, the user is prensented with thier score

//the option to input user initials should be availble alongside the highscore, and both should be stored locally