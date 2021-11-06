class WHArray extends Array {
  lastElement() {
    return this[this.length - 1];
  }
  firstElement() {
    return this[0];
  }
}

let a = new WHArray(1, 2, 3, 4);
console.log(a.firstElement());
console.log(a.lastElement());
// a.forEach();
// let b = [1, 2, 3];
// b.forEach((e) => e);
