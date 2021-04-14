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