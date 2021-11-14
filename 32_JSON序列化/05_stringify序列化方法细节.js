const obj = {
  name:'hw',
  age:14,
  friends:{
    name:"hw",
    age:20,
    girlFriend:'wh'
  },
  hobbies:[1,2,3],
  // toJSON:function() {
  //   return '覆盖'
  // }
}

// 对对象进行序列化
const objString = JSON.stringify(obj)
console.log(objString);

// 第二个参数，replacer
// 2.1 设置哪些字段需要转换
const objString2 = JSON.stringify(obj,['name','age'])
console.log(objString2);
// 2.2 传入回调函数
const objString3 = JSON.stringify(obj,(key,value) => {
  if(key === 'age'){
    return value + 1
  }
  return value
})
console.log(objString3);

// 第三个参数  设置缩进
// const objString4 = JSON.stringify(obj,null,2)
const objString4 = JSON.stringify(obj,null,'---')
console.log(objString4);

// 4. 如果对象中有 toJSON 方法

const objString5 = JSON.stringify(obj)
console.log(objString5);
