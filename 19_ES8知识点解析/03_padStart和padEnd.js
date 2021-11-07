// 字符串的填充
const message = "hello world";
const m1 = message.padStart(19, "aba");
const m2 = message.padEnd(20, "ccc");
console.log(m1);
console.log(m2);
// 案例
const cardNum = "2312321321321312331";
const lastFourNum = cardNum.slice(-4);
console.log(lastFourNum);
const finalCardNum = lastFourNum.padStart(cardNum.length, "*");
console.log(finalCardNum);
