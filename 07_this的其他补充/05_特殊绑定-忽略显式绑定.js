function foo() {
  console.log(this)
}

foo.apply('abc')
foo.apply('')
foo.apply(null)
foo.apply(undefined)

foo.call('abc')
foo.call('')
foo.call(null)
foo.call(undefined)

var bar = foo.bind(null)
bar()
var bar = foo.bind(undefined)
bar()