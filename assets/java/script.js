//create an array which stores questions
var quizStart = [
    
    {question: "To select an element in your HTML via JavaScript you would use which method?", answers: { a: "createElement()", b: "querySlector()", c: "getElementById()", d: "appendChild()"}, correctAnswer: "c" },

    {question: "test1", answers: { a: "one", b: "two", c: "three", d: "four"}, correctAnswer: "b" },

    {question: "test2", answers: { a: "one", b: "two", c: "three", d: "four"}, correctAnswer: "b" },

    {question: "test3", answers: { a: "one", b: "two", c: "three", d: "four"}, correctAnswer: "b" },

    {question: "This is a question?", answers: { a: "one", b: "two", c: "three", d: "four"}, correctAnswer: "b" },
];

//create html block which can be referenced and modified by the array position to present the proper question and answer

for (var i = 0; i < quizStart.length; i++) {
    var questionText = quizStart[0].question;
    console.log(questionText);
}

for (var i = 0; i < quizStart.length; i++) {
    var asnwerbuttons = quizStart[0].answers;
    console.log(asnwerbuttons);
}

//when the start quiz button is clicked, the current section should be replaced with the first question
document.getElementById("stbtn").addEventListener("click", function() {

    var divEl = document.getElementById("qbox");
    var btnEl = document.getElementById("btnbx");
    var startEl = document.getElementById("homestart")

    var qBtnA = document.createElement("div");
    var qBtnB = document.createElement("div");
    var qBtnC = document.createElement("div");
    var qBtnD = document.createElement("div");
    var titleSection = document.createElement("h1");
    var textSection = document.createElement("p");
    var abtn = document.createElement("button")
    var bbtn = document.createElement("button")
    var cbtn = document.createElement("button")
    var dbtn = document.createElement("button")
    
    divEl.parentNode.replaceChild(titleSection, divEl);
    startEl.remove("homestart");
    // btnEl.remove("stbtn");

    btnEl.appendChild(qBtnA);
    btnEl.appendChild(qBtnB);
    btnEl.appendChild(qBtnC);
    btnEl.appendChild(qBtnD);

    qBtnA.appendChild(abtn);
    qBtnB.appendChild(bbtn);
    qBtnC.appendChild(cbtn);
    qBtnD.appendChild(dbtn);

    
    titleSection.className = "h1-box";
    titleSection.textContent = questionText;
    
    textSection.className = "question-text";
    textSection.textContent = "";

    qBtnA.className = "questions-buttons-a";
    qBtnB.className = "questions-buttons-b";
    qBtnC.className = "questions-buttons-c";
    qBtnD.className = "questions-buttons-d";


    abtn.className = "a-btn";
    abtn.textContent = asnwerbuttons.a;
    abtn.setAttribute("id", "abtn");

    bbtn.className = "b-btn";
    bbtn.textContent = asnwerbuttons.b;
    bbtn.setAttribute("id", "bbtn");

    cbtn.className = "c-btn";
    cbtn.textContent = asnwerbuttons.c;
    cbtn.setAttribute("id", "cbtn");

    dbtn.className = "d-btn";
    dbtn.textContent = asnwerbuttons.d;
    dbtn.setAttribute("id", "dbtn");

    document.getElementById("abtn").addEventListener("click", function() {
        if (quizStart.answers === quizStart.correctAnswer) {
            console.log("hello");
        }
    });

    document.getElementById("bbtn").addEventListener("click", function() {
        if (quizStart.answers === quizStart.correctAnswer) {
            console.log("hello");
        }
    });

    document.getElementById("cbtn").addEventListener("click", function() {
        if (quizStart.answers === quizStart.correctAnswer) {
            console.log("hello");
        }
    });

    document.getElementById("dbtn").addEventListener("click", function() {
        if (quizStart.answers === quizStart.correctAnswer){
            console.log("hello");
        }
    });
})


//each question should have a time limit of 60 seconds (60,000 ms)

//when a questions answer is selected, it should log a true or false and replace the section with the html for the new question

//each new question should display a boolean value for the previous question at the bottom

//once all questions have been answered, or the timer on a question reaches 0, the user is prensented with thier score

//the option to input user initials should be availble alongside the highscore, and both should be stored locally