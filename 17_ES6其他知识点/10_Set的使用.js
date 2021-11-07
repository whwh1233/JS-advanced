// // 10,20,30,40,10,23
// const set = new Set();
// set.add(10);
// set.add(20);
// set.add(30);
// set.add(10);
// set.add({});
// set.add({});
// const obj = {};
// set.add(obj);
// set.add(obj);
// console.log(set);
// 对数组去重
const arr = [10, 20, 30, 10];
const arrSet = new Set(arr);
console.log(arrSet.size);
// const newArr = Array.from(arrSet);
const newArr = [...arrSet];
console.log(arrSet);
console.log(newArr);
arrSet.delete(10);
console.log(arrSet);
console.log(arrSet.has(20));
arrSet.forEach((e) => console.log(e));
for (e of arrSet) {
  console.log(e);
}
arrSet.clear();
console.log(arrSet);
