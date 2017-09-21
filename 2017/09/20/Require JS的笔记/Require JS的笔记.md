---
title: RequireJS 是一个基于原生js实现的模块化解决方案
categories: RequireJS
tags: 开发用到的新技术
---

>## 1.模块化

+ 模块化是什么？
    - 具有实现一个完整功能的整体

+ 为什么要使用模块化?
    - 为了更好地复用
    - 减少全局变量污染
    - 解决功能之间的依赖关系

    ```bash
    var KTV=(function(){
      var leastPrice=1000;
      var total=0;
      return {
          pay:function(){
              if(total>=leastPrice){
                  alert("买单成功");
              }
          }
      }
  })()
    ```

>## 2.模块化的实现方式

+ 使用闭包来实现
    - 随着功能的增加，暴露的全局变量也会越来越多
        - requireJS几乎没有全局变量
    - 不能很好的解决模块依赖的问题

+ 使用主流的一些实现模块化的库来实现
    - requireJS-->AMD规范-->Async Module Define-->(异步模块加载规范)
    - seaJS-->CMD规范-->Common Module Define-->同步模块加载规范 ：玉伯
        - 阿里：朴灵《深入浅出Node.JS》

+ browserify
+ webpack
+ Node.JS-->CommonJS规范
+ mv*框架
    - angular vue backbone avalon
+ 组件化
    - react /react native /ionic

>## 3.(面试的重点)AMD规范和CMD规范比较大的区别：

+ 1.AMD规范就是指requireJS
    - -->ansnc module define: 异步模块定义（异步加载模块，依赖前置）
        - -->模块定义和导入（使用）：define定义一个模块，define(["导入的模块"])/require(["导入的模块"])
        - -->异步加载模块 动态创建script标签
        - -->把所有依赖的模块放在文件的头部

+ 2.CMD规范就是指的seajs
    - -->common module define：通用模块定义(同步加载模块)
    - -->模块定义和导入：exports/module.exports
    - -->同步加载模块
    - -->依赖就近：50行代码使用商品模块的功能，就在49行依赖商品模块

+ 3.CommonJS规范：nodeJS

>## 4.requireJS这种模块化解决方案称之为AMD规范

+ AMD:async module define:异步模块定义

+ 一直非常现实的有CMD规范--》sea.js(玉伯)
    - CMD:common module define(借鉴了node.js中的CommonJS规范)

+ 模块化规范：AMD CMD CommonJS

+ 模块化解决方案：requireJS seaJS browerify webpack

+ MV*: mvc mvvm mvp

+ 组件化开发：react