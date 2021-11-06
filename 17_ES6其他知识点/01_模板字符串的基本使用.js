// ES6之前
let name = "wh";
let height = 199;

console.log("my name is " + name + ",height id " + height);
// ES6模板字符串
console.log(`my name is ${name},height is ${height}`);
const info = `age double is ${height * 2}`;
console.log(info);
function doubleHeight() {
  return height * 2;
}
const info2 = `double age is ${doubleHeight()}`;
console.log(info2);
