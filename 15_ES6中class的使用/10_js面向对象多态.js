function getArea(foo) {
  console.log(foo.getArea());
}
var obj1 = {
  name: "rec",
  getArea() {
    return 100;
  },
};

var obj2 = {
  name: "circle",
  getArea() {
    return 200;
  },
};

class Person {
  getArea() {
    return 300;
  }
}
var p = new Person();
getArea(obj1);
getArea(obj2);
getArea(p);
