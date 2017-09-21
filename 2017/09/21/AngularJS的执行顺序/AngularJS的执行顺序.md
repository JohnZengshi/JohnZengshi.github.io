---
title: AngularJS中的执行顺序
categories: Angular
tags: 没事研究来玩的
---

>## AngularJS中的执行顺序

+ 浏览器解析DOM树，不认识的指令标签会略过.

+ 当解析到angular.js的时候，执行ng脚本.

+ ng会监测到1个事件 DOMContentLoaded事件 (和jq的ready)ng就开始工作了.

+ 查找模块依赖项.我们在创建模块的时候,将我们依赖的模块加载进来.

+ 寻找ng-app 确定那1段代码是ng需要管理的.

+ 初始化必要的组件.创建内部需要用的一些对象啊 变量啊....$rootScope 根作用域...

+ 配置和运行: 允许我们写代码来干涉这一步.

+ ng开始解析dom树.ng-app指定的dom树.

+ 遍历dom树 搜集ng指令.

+ 执行指令对应的回调和link函数.

+ 最终生成1个视图

+ 使用1个死循环,监视视图中的事件触发.