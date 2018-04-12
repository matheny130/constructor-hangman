var letterConstr = require("./letter.js");

function Word(value) {
  this.value = value;
  this.letters = [];
  this.guessesMade = "";

  for (i = 0; i < this.value.length; i++) {
    this.letters.push(new letterConstr.letter(this.value[i]));
  }
};

Word.prototype.isComplete = function () {
  for (var i = 0; i < this.letters.length; i++) {
    if (!this.letters[i].show) return false;
  }
  return true;
};


Word.prototype.findLetter = function () {
  var lowerCase = letter.toLowerCase();

  if (this.guessesMade.indexOf(lowerCase) != -1) {
    return "duplicate";
  }
  this.guessesMade += lowerCase;
  for (var i = 0; i < this.letters.length; i++) {
    if (this.letters[i].value.toLowerCase() == lowerCase) {
      this.letters[i].show = true;
    }
  }
};

Word.prototype.toString = function () {
  var output = "";
  for (var i = 0; i < this.letters.length; i++) {
    output += this.letters[i].printInfo();
  }
  return output;
}

exports.wordCons = Word;

console.log("working")