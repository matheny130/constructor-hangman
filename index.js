var word = require("./word.js")
var prompt = require("prompt")



 game = {
 wordsToGuess: ["Ohio", "Florida", "Colorado", "California", "Vermont", "Arkansas", "Iowa", "Pennsylvania", "Illinois", "Michigan", "Mississippi"],
 gamesWon: 0,
 guessesRemain: 10,
 currentWord: null,
  //randomIndex = Math.floor(Math.random() * wordsToGuess.length),
  //randomWord = wordsToGuess[randomIndex],


  startGame: function (word) {
    this.resetGuesses();
    this.currentWord = new word([Math.floor(Math.random() * wordsToGuess.length)]);
    this.currentWord.getValue();
    this.promptUser();
  },

  resetGuesses: function () {
    this.guessesRemain = 10;
  },

  promptUser: function () {
    prompt.get(["guessedLetter"], function (err, result) {
      console.log("You guessed: " + result.guessedLetter);

      var numGuessed = this.currentWord.checkLetter(result.guessedLetter);

      if (numGuessed == 0) {
        console.log("Wrong")
        this.guessesRemain--;
      } else {
        console.log("Correct");
        if (this.currentWord.findWord()) {
          console.log("You won!");
          console.log("-------------------");
          return;
        }
      }

      console.log("Guesses remaining: " + this.guessesRemaining);
      console.log("-------------------");
      if ((this.guessesRemaining > 0) && (this.currentWord.found == false)) {
        this.promptUser();
      }
      else if (this.guessesRemaining == 0) {
        console.log("Game over. Correct Word ", this.currentWord.target);
      } else {
        console.log(this.currentWord.wordRender());
      }
    });
  },
}

game.startGame();
console.log("working")