---
title: AngularJS中的依赖注入
categories: Angular
---

>##  依赖注入,angularjs解决这种依赖提供的方案: 依赖注入。、

+ 行内式注入
    - 创建控制器的时候,第2个参数是1个数组.
    ```js
    app.controller("$Ctrl",["$scope","$log",function($scope,$log){

    }])
    ```

+ 推断式注入.
    - 第2个参数不需要写数组 不需要指定什么服务要注入只需要将注入的服务写成形参.
    ```js
    app.controller("demoCtrl",function($scope,$log){
        
    })
    ```