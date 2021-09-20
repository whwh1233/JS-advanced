var obj1  = {
  name:'obj1',
  foo:function() {
    console.log(this)
    
  }
}
var obj2 = {
  name:'obj2'
};

// obj2.bar = obj1.foo
// obj2.bar()

// 简介函数调用，也属于默认绑定
(obj2.bar = obj1.foo)()
