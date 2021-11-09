const obj = {
  name: "wh",
  age: 17,
};

// Object.defineProperty(obj, "name", {
//   get: function () {
//     console.log("被访问");
//   },
//   set: function () {
//     console.log("被设置");
//   },
// });
// console.log(obj.name);
// obj.name = "00";
// console.log(obj);
Object.keys(obj).forEach((e) => {
  console.log(e);
  let value = obj[e];
  Object.defineProperty(obj, e, {
    get: function () {
      console.log("get", e);
      return value;
    },
    set: function (newValue) {
      console.log("shezhi ", e);
      value = newValue;
    },
  });
});
obj.name = "sda";
console.log(obj.name);
console.log(obj.age);
