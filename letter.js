Letter = function (letter) {
  this.letter = "";
  this.show = false;

  this.letterRender = function () {
    return !(this.show) ? "_" : this.charac;
    if (this.value == "") {
    this.show = true;
    }
  }
}

Letter.prototype.show = function () {
  if (this.show) {
    return this.letter;
  } else {
    return "_";
  }
}

module.exports = Letter;
console.log("working")