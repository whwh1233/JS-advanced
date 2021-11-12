// 1.深拷贝
const obj = {
  name:'hw',
  age:14,
  friends:{
    name:"hw",
    age:20,
    girlFriend:'wh'
  },
  hobbies:[1,2,3],
  w:function() {
    console.log('heihei');
  }
}

// obj 放入 info 中
// 1.引用赋值
const info = obj


// console.log(info)
// 浅拷贝  引用类型还是使用的变量地址
const info2 = Object.assign(obj)
// const info2 = {...obj}
// console.log(info2);


// 希望两个对象之间完全没有关系
// 即深拷贝
// 3.使用 stringify 和 parse 来实现
const jsonstring = JSON.stringify(obj)
const r = JSON.parse(jsonstring)
obj.name = 'jjj'
obj.age = 24
obj.friends.age = 200
console.log(r);
// console.log(obj);
// 缺点：函数无法实现
