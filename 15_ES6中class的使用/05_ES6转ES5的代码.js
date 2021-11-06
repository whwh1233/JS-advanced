// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let p = new Person("wh");
// console.log(p);
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  running() {
    console.log(this.name, "running");
  }
}
// 转换后的代码
// ("use strict");

// // 确保 Person 是作为一个类来调用的
// function _classCallCheck(instance, Constructor) {
//   if (!(instance instanceof Constructor)) {
//     throw new TypeError("Cannot call a class as a function");
//   }
// }

// var Person = function Person() {
//   _classCallCheck(this, Person);
// };
// Person();

("use strict");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

// 标记为 pure 是为了 webpack 的 treeshaking
var Person = /*#__PURE__*/ (function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [
    {
      key: "running",
      value: function running() {
        console.log(this.name, "running");
      },
    },
  ]);

  return Person;
})();
