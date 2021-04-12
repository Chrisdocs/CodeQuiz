
function appendInitialsScores() {

    var score = document.getElementById("scorelist");
    var scoreArray = JSON.parse(localStorage.getItem("initials"));
    console.log(scoreArray);
    
    var scorelist = document.createElement("ul");
    scorelist.className = "score-ul";
    scorelist.setAttribute("id", "scoreul");

    
    for (var i = 0; i < scoreArray.length; i++) {
        var scoreLi = document.createElement("li");
        scoreLi.className = "scores-list"
        scoreLi.textContent = scoreArray[i];

        scorelist.appendChild(scoreLi);
    }
    
    score.appendChild(scorelist);
}
appendInitialsScores();
