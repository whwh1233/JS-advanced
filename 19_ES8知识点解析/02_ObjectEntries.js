const info = {
  name: "wh",
  age: 19,
};

console.log(Object.entries(info));
const arr = Object.entries(info);
arr.forEach((item) => {
  console.log("key", item[0]);
  console.log("values", item[1]);
});
