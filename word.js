var letterConstr = require("./letter.js");

Word = function (value) {
  this.value = value;
  this.letters = [];
  this.found = false;
};

getLetter = function () {
    for (var i = 0; i < this.value.length; i++) {
      this.letters.push(new Letter(this.value[i]));
    }
};

findWord = function () {
  this.found = this.letters.every(function (currLett) {
    return currLett.appear;
  });
  return this.found;
};

checkLetter = function (guessLet) {
    var toReturn = 0;

    for (var i = 0; i < this.letters.length; i++) {
      if (this.letters[i].charac == guessLet) {
        this.letters[i].appear = true;
        toReturn++;
      }
    }
    return toReturn;
};

toString = function () {
    var output = "";
    for (var i = 0; i < this.letters.length; i++) {
      output += this.letters[i].printInfo();
    }
    return output;
}



module.exports = Word;


 // Word.prototype.findLetter = function () {
   // var lowerCase = letter.toLowerCase();

    //if (this.guessesMade.indexOf(lowerCase) != -1) {
      //return "duplicate";
    //}
    //this.guessesMade += lowerCase;
    //for (var i = 0; i < this.letters.length; i++) {
      //if (this.letters[i].value.toLowerCase() == lowerCase) {
        //this.letters[i].show = true;
      //}
    //}
  //};

  //Word.prototype.toString = function () {
    //var output = "";
    //for (var i = 0; i < this.letters.length; i++) {
      //output += this.letters[i].printInfo();
    //}
    //return output;
  //}
//}
//module.exports = Word;

console.log("working")