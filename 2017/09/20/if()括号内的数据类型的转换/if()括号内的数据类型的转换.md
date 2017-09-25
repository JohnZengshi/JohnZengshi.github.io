---
title: if()括号内的数据类型的转换
categories: javascript
tags: javascript基础知识
---

>## if（condition）的condition求值结果若非布尔值，ECMAScript会自动调用Boolean()转换函数将结果转换为布尔值。转换规则为：

|   数据类型    | 转换为true | 转换为false  |
| :-------: | :-----: | :-------: |
|  boolean  |  true   |   false   |
|  String   | 任何非空字符串 |   空字符串    |
|  Number   | 任何非零数字值 |   0和NaN   |
|  Object   |  任何对象   |   null    |
| Undefined |   n/a   | undefined |

>## 有关的面试题：

```bash
var a="undefined", b="false", c="null", d="",e="0";
var f=undefined,g=false,h=null,i=0;
function assert(x) {
    if (x) {
        console.log("true");
    }
    else{
        console.log("false");
    }
}
console.log(assert(a));//true
console.log(assert(b));//true
console.log(assert(c));//true
console.log(assert(d));//false
console.log(assert(e));//true
console.log(assert(f));//false
console.log(assert(g));//false
console.log(assert(h));//false
console.log(assert(i));//false
console.log(assert(j));//false
```