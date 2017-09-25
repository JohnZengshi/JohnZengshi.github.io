---
title: 关于javascript的数据类型
data: 2015/11/9 21:50:23
categories: javascript
tags: javascript基础知识
---

## 关于javascript的数据类型

>### 1.返回数据类型

```bash
1. "undefined" ---未定义
2. "boolean" ---布尔值
3. "string" ---字符串
4. "number" ---数值
5. "object" ---对象或者null
6. "function" ---函数
```

>### 2.强制类型转换

1.常见五个例子

```bash
1. Number(参数)强制把数据类型转换成数值类型
2. parseInt(参数1，参数2)将字符串转换成整数
3. parseFloat()将字符串转成浮点数
4. string(参数)：将任何数据类型转换成字符串
5. Boolean()可以将任何数据类型转化成布尔类型的值
```

>### 3.隐式类型转换

1. 四则运算

```bash
    1.加法运算符+是双目运算符，只要其中一个是string类型，表达式的值便是一个String。

    2.对于其他的四则运算，只有其中一个是Number类型，表达式的便是一个Number。(列如 "-" 运算符)

    3.对于非法字符的情况通常会返回NaN:'1'*'a'    // => NaN,这是因为parseInt(a)值为NaN，1*NaN还是NaN
```

2. 判断语句

```bash
     判断语句中的判断条件需要是 Boolean类型，所以条件表达式会被隐式转换为Boolean。其转换规则则同Boolean的构造函数。比如:

    var obj = {};

    if(obj){
    　　　while(obj);
    　　　　}
```


3. Native代码调用

```bash
    JavaScript宿主环境都会提供大量的对象，它们往往不少通过JavaScript来实现的。JavaScript给这些函数传入的参数也会进行隐式转换。例如BOM提供的alert方法接受String类型的参数：

    alert({a:1});  //=>[object Object]
```

