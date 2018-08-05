// start with demo-1
var obj = {};

 // 为obj定义一个名为 hello 的访问器属性
Object.defineProperty(obj, 'hello', {
  get: function () {
    console.log('get method was called');
  },
  set: function (val) {
    console.log('set method was called, the value is ' + val);
  }
})

// 读取属性，就是调用get函数并返回get函数的返回值
// 可以像普通属性一样读取访问器属性, 访问器属性的"值"比较特殊，读取或设置访问器属性的值，实际上是调用其内部特性：get和set函数。
obj.hello;

obj.hello = 'hello world';  // 为属性赋值，就是调用set函数，赋值其实是传参
// end with demo-1
