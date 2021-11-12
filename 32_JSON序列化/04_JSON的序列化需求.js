const obj = {
  name:'hw',
  age:14,
  friends:{
    name:"hw",
    age:20,
    girlFriend:'wh'
  },
  hobbies:[1,2,3]
}

// 存入localStorage
// 会被强制转换成字符串类型

localStorage.setItem('obj',obj)

// 对对象进行序列化
const objString = JSON.stringify(obj)
localStorage.setItem('obj1',objString)


const n = localStorage.getItem('obj')
const n1 = localStorage.getItem('obj1')
console.log(n);
console.log(n1);
// 转回对象
console.log(JSON.parse(n1));

