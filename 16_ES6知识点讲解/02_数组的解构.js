var nums = [1, 2, 3];
var [i1, i2, i3] = nums;
console.log(i1);
console.log(i2);
console.log(i3);

// 解构后面的元素
var [, i22, i33] = nums;
console.log(i22);
console.log(i33);
// 解构出一个元素，后面的放到一个新数组li
var [itema, ...newNums] = nums;

console.log(itema);
console.log(newNums);
// 解构的默认值
var [i1, i2, i3, i4 = "aaa"] = nums;
console.log(i4);
