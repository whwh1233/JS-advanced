// 没有 writable
// 但有 get 和 set

var obj = {
  name:'wh',
  age:19,
  _address:'北京'
}

// 存取属性描述符
// 1. 隐藏某个私有属性，不希望被外界使用和赋值
// 2. 如果我们希望截获某个属性在访问和s设置值得时候,也会使用存取属性描述符
// 
// 这是vue2 响应式的原理
// 在get中搜集， 在set中响应，遍历data中的return的对象中的每一个keys
Object.defineProperty(obj,"address",{
  enumerable:true,
  configurable:true,
  get:function() {
    foo()
    return this._address
  },
  set:function(value) {
    this._address = value
    console.log(value)
  }
})
function foo() {
  console.log('获取了一次我的address')
}
console.log(obj.address)
obj.address='上海市'
console.log(obj.address)

