---
title: es5之前要获取当前函数本身
categories: 关于ES5规范
tags: 掉坑里了
---

>## es5之前要获取当前函数本身，可以在函数体内部通过arguments.callee

+ es5规定了严格模式，严格模式中禁止使用callee/caller

+ 在严格模式下面如何获取当前函数？

```bash
(function fn(){
    //fn是一个"特殊的名字",这个名字在外界访问不是一个函数名，在函数体内部访问就指向函数本身
})()
``` 

+ 面试题

```bash
var f1 = funtion f2(){
    console.log(f1 === f2)  //true;
}
console.log(typeof f1) //Function
console.log(typeof f2) //"untifined"
```