var wordConstructor = require("./word.js");
var prompt = require("prompt");
var wordsToGuess = ["Ohio", "Florida", "Colorado", "California", "Vermont", "Arkansas", "Iowa", "Pennsylvania", "Illinois", "Michigan", "Mississippi"];
//var MyWord = new Word();
game = function() {
  //var wordsToGuess: ["Ohio", "Florida", "Colorado", "California", "Vermont", "Arkansas", "Iowa", "Pennsylvania", "Illinois", "Michigan", "Mississippi"],
  gamesWon = 0;
  guessesRemain = 10;
    //currentWord: new Word(wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)]),
    //randomIndex: new Word(Math.floor(Math.random() * wordsToGuess.length)),
  randomWord = wordsToGuess[new Word(Math.floor(Math.random() * wordsToGuess.length))];


  startGame = function (Word) {
    this.resetGuesses;
    //this.randomIndex = new Word(this.wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)]);
    this.getLetter;
    this.promptUser;



    resetGuesses = function () {
      this.guessesRemain = 10;
    }

    promptUser = function () {
      prompt.get(["guessedLetter"], function (err, result) {
        console.log("You guessed: " + result.guessLet);

        var letGuessed = this.randomWord.checkLetter(result.guessedLetter);

        if (letGuessed == 0) {
          console.log("Wrong")
          this.guessesRemain--;
        } else {
          console.log("Correct");
          if (this.randomWord.findWord()) {
            console.log("You won!");
            console.log("-------------------");
            return;
          }
        }

        console.log("Guesses remaining: " + this.guessesRemaining);
        console.log("-------------------");
        if ((this.guessesRemaining > 0) && (this.randomWord.value == false)) {
          this.promptUser();
        }
        else if (this.guessesRemaining == 0) {
          console.log("Game over. Correct Word ", this.randomWord.value);
        } else {
          console.log(this.currentWord.toString());
        }
      });
    }
  }
}


game();
console.log("working")