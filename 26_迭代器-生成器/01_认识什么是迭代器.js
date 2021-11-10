// 编写一个迭代器
const iterator = {
  next() {
    return {
      done: false,
      value: "wh",
    };
  },
};

// 数组
const names = ["a", "b", "c"];

// 创建一个迭代器对象访问数组
const namesIterator = {};
