// const nums = [1, [2, 3], [[3.1, [7, 8, 9], 3.2], 4, 5, 6], 7];
// console.log(nums);
// // 按深度递归数组
// console.log(nums.flat(2));

// 2.flatMap的使用
const nums2 = [20, 30, 40];
const newnum1 = nums2.flatMap((item) => {
  return item * 2;
});
const newnum2 = nums2.map((item) => {
  return item * 2;
});
console.log(newnum1);
console.log(newnum2);

// flatmap的使用场景
const message = ["1 2", "hello world", "my name is wh"];
// 自动给数组的元素降维
const words = message.flatMap((item) => {
  return item.split(" ");
});
console.log(words);
