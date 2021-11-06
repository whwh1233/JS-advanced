const info = {
  name: "wh",
  friend: { name: "kobe" },
};

// 这里保存的其实是 info.friend的内存地址
const obj = { ...info, addredd: "beijing ", name: "hwhw1233" };
console.log(obj);
obj.friend.name = "james";
console.log(obj);
console.log(info);
