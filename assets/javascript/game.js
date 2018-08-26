// Variables and counters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var wins = 0;
var losses = 0;
var guesscounter = 9;
var userGussesSoFar = [];

var userWinsField = document.getElementById("userwins");
var userLossField = document.getElementById("userlosses");
var userGuessField = document.getElementById("guessesleft");
var userGuessesSoFarField = document.getElementById("guesses_so_far");

userWinsField.innerText = wins;
userLossField.innerText = losses;
userGuessField.innerText = guesscounter;

// computer picks a random letter

var computerguess = Math.floor((Math.random() * letters.length));
console.log(letters[computerguess]);



// users guess function
document.onkeyup = function () {
    var usersguess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("usersguess", usersguess);


    console.log(userGussesSoFar);
    console.log("computerguess", letters[computerguess]);

    // compare values
    if (usersguess === letters[computerguess]) {

        wins++;

        userWinsField.innerText = wins;
        reset();

    } else {
        guesscounter--;
        userGuessField.innerText = guesscounter;
        userGussesSoFar.push(usersguess);
        userGuessesSoFarField.innerText = userGussesSoFar;

        if (guesscounter === 0) {
            losses++;
            userLossField.innerText = losses;

            reset();
        } 
    }



}

function reset() {
    computerguess = Math.floor((Math.random() * letters.length));
    console.log(letters[computerguess]);
    guesscounter = 9;
    userGuessField.innerText = guesscounter;
    userGussesSoFar = [];
    userGuessesSoFarField.innerText = "";


}