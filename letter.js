var Letter = function (value) {
  this.value = value;
  this.show = false;
  if (this.value == "") {
    this.show = true;
  }
}

Letter.prototype.show = function () {
  if (this.show) {
    return this.value;
  } else {
    return "_";
  }
}

console.log("working")