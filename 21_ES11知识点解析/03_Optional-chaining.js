// 可选链
const info = {
  name: "wh",
  age: 16,
  height: 188,
  friend: { name: "lilei", girl: "hanmeimei" },
};
const info2 = {
  name: "wh",
  age: 16,
  height: 188,
};
console.log(info.age);
console.log(info?.address);
console.log(info.friend.girl);
// 如果有friend 那就选 girl
// 如果没，后面就不执行了，直接返回undefined
console.log(info2.friend?.girl);
