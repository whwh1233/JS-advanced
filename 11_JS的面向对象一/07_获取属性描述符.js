var obj = {
  _height:'',
  _age:'',
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
// 获取某个属性的属性描述符
console.log(Object.getOwnPropertyDescriptor(obj,"name"))
console.log(Object.getOwnPropertyDescriptor(obj,"age"))

// 获取对象所有的属性描述符
console.log(Object.getOwnPropertyDescriptors(obj))
