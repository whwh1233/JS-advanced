var obj = {
  _height:'',
  _age:'',
  // 底下的代码相当于把 age的enumerable 和 configurable 变成true
  // set age(value) {
  //   console.log('age被改变了')
  //   this._age = value
  // },
  // get age() {
  //   return this._age
  // }
}
Object.defineProperties(obj,{
  "name":{
    value:'wh',
    enumerable:true,
    configurable:true,
    writable:true
  },
  "age":{
    configurable:false,
    enumerable:false,
    get:function() {
      return this._age
    },
    set:function(value) {
      this._age = value
    }
  },
  "height":{
    enumerable:false,
    configurable:true,
    get:function() {
      return this._height
    },
    set:function(value) {
      this._height = value
    }
  }
})

obj.height= 1
obj.age = 200
console.log(obj)
console.log(obj.age)
console.log(obj)
