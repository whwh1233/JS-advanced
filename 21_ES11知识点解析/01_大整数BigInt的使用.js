// ES11之前，最大的INT 是
const maxInt = Number.MAX_SAFE_INTEGER;
console.log(maxInt); // 9007199254740991
// console.log(maxInt + 1);
// console.log(maxInt + 20);
// ES11之后，bigint 数字后面+ n
// 但是运算有限制
const bigInt = 339007199254740991n;
console.log(bigInt + 1n);
console.log(bigInt + 10n);
const num = 100;
console.log(bigInt + BigInt(num));
