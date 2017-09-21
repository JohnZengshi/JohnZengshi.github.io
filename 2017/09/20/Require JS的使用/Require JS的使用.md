---
title: RequireJS的使用
categories: RequireJS
tags: 开发用到的新技术
---

>## 1.入门

+ 下载requirejs文件

+ 在需要使用requireJS的html页面中引入requirejs文件

+ 编写js代码-->编写一个模块
    - 在a.js文件中通过来定义一个模块(tip:约定一个js文件就是一个模块)
    ```bash
    define([],function(){
        //模块内部的代码
        })
    ```
    - 在b.js文件中从而获取a.js中的代码，这样的话就可以保证在执行b.js中的代码之前先执行了a.js中的代码
    ```bash
     x require(["a"],function(){})
    ```

>## 2.依赖注入：模块具有返回值：

+ 1.给定义模块的回调函数添加return语句
```bash
    //a.js文件中
    define(function(){
        //模块的逻辑
        return 10;
    })
    //b.js文件中
    define(function(){
        return {name:"张三"};
    })
```

+ 2.在获取模块的时候，通过require()的二个参数来依次获取各个模块的返回值

```bash
    require(["./a.js","./b.js"],function(a,b){
        console.log(a);//10
        console.log(b.name);//"张三"
    })
```

+ 依赖注入的使用注意点：以后在实际项目中，可能一个js文件会依赖无数个模块，对于无数个模块有的有返回值，有的没有返回值，在添加模块依赖的时候，应该注意：
    - 把所有的有返回值的模块在前面添加，把没有返回值的模块在后面添加
    - 举例：如果有a、b、c 3个模块，其中，a模块有返回值，b模块没有返回值，c模块有返回值
        ```bash
            define(["a","b","c"],function(a,c){
        //如果形参编写的时候变成了：a,c
        //  -->a模块可以正常获取，c接受了b模块的返回值，b模块没有返回值，所以c的值为：undefined
        //  -->所以必须要求在形参的位置，写成：a,b,c
        })
        ```
    - 推荐的做法：
        ```bash
        define(["a","c","b"],function(a,c){
            //a接受a模块返回值
            //c接受c模块返回值
            //b模块没有返回值，就不用接收
        })
        ```

>## 3.入口文件

+ 通过给引入requirejs时的script标签添加data-main属性值，那么requirejs就会自动加载该文件(模块)，可以通过该文件来进行访问其他的模块
    ```bash
    <script src="require.js" data-main="./main"></script>
    ```

>## 4.如何检测第三方库是否支持AMD规范？

+ 查看源代码，看看是否有以下内容？如果有，说明支持AMD规范，如果没有说明不支持
    ```bash
    if (typeof define === "function" && define.amd) {}
    ```

>## 5.路径(加载模块时遵循的规则)

+ 如果没有入口文件，加载模块时的路径以引入requirejs时的路径为准(优先级最低)

+ 如果有入口文件，加载模块的路径以入口文件所在目录为准(优先级次高)

+ 通过配置来自定义路径(优先级最高)
    ```bash
    require.config({
        //这里的baseUrl还是相对于html文件
        baseUrl:""
    })
    ```

>## 6.配置常用的模块路径(比如：jquery/arttemplate)
```bash
    require.config({
    baseUrl:"./lib",
    paths:{
        //路径不需要.js后缀，最终该文件的路径将会和baseUrl拼接，也就是："./lib/js/jquery-2.1.4"
        jquery:"js/jquery-2.1.4"
    }
    })
    //a.js文件中
    define(["jquery"],function($){
        //这里请求的jquery也就是去上面paths中设置的jquery进行查找,也就是："./lib/js/jquery-2.1.4"

    })
```
 
>## 7.如果一个js文件不支持AMD这种模块定义规范(比如bootstrap.js)，但是它又依赖于我们定义的模块(jquery)，通过以下方式来解决
```bash
        require.config({
        baseUrl:"./lib",
        paths:{
            //路径不需要.js后缀，最终该文件的路径将会和baseUrl拼接，也就是："./lib/js/jquery-2.1.4"
            jquery:"js/jquery-2.1.4",
            bootstrap:"assets/bootstrap/bootstrap"
        },
        shim:{
            //这里的bootstrap就是上面的paths中的bootstrap
            bootstrap:{
                //这样在请求bootstrap的时候会自动去请求jquery模块
                deps:["jquery"] //这里的"jquery"也是上面paths中的jquery
            }
        }
    })
```
