---
title: 上下文调用模式
categories: javascript
tags: 方法区别
---

>## 调用方式1 函数调用

+   ```js
    function test(){
        console.log(this);
        console.log('test 调用了');
        console.log(argument);
    }
    test();
    ```

>## 调用方式2 call方法调用

+ 动态改变this
    ```js
    参数1：this是要替换test的对象
    参数2：...参数n 传递给函数的实参

    test.call({name:'jack',skill:'jump'},'rose','john')
    //(调用一个对象的一个方法，以另一个对象替换当前对象,即调用上面test的方法)
    ```

>## 调用方式3 apply方法调用

+ 也可以动态的改变this
    ```js
    参数1：this是要替换test的对象
    参数2：传入一个数组(或伪数组)传递给函数

    test.apply({name:'rose',skill:'swim'},{0:'jack',1:'rose',length:1})
    //与call差不多
    ```

>## call和apply的区别：

+ call方法从第二个参数开始可以接受任意的参数，每个参数会映射到相应位置的func的参数，可以通过参数名调用，但是如果所有参数作为数组传入，他会作为一个整个映射到func对应的第一个参数，之后参数都会为空：

    ```js
    function func(a,b,c){}

    func.call(obj,1,2,3);
    //function接收到的参数为1,2,3

    func.call(obj,[1,2,3]);
    //funvtion接收到的参数为[1,2,3],untifined,untifined
    ```

+ apply方法最多只有两个参数，第二个参数接受的只能是数组或伪数组，并传入到func对应的参数上

    ```js
    func.apply(obj,[1,2,3])
    //function接受到的实际参数是1,2,3

    func.apply(obj,{0:1,1:2,2:3,length:3})
    //function接收到的参数实际上是1,2,3
    ```