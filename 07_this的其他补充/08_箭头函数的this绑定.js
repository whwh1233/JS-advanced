// 1. 测试箭头函数中this的指向
// var name = 'why'
// var foo = () => {
//   console.log(this)
// }

// foo()
// var obj = {
//   foo:foo
// }
// obj.foo()
// foo.call('abc')
// 2.应用场景
// 箭头函数就不用 定义 _this = this 
var obj =  {
  data:[],
  getData() {
    var _this = this
    setTimeout(function(){
      var result = [1,2,3]
      _this.data = result
    },2000)
    // setTimeout(() => {
    //   var result = [1,22,3]
    //   this.data = result
    // },2000)
  }
}
obj.getData()
console.log(obj.data)
