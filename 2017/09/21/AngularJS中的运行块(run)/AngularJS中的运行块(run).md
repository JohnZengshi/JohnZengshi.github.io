---
title: AngularJS中的运行块(run)
categories: Angular
---

>## 1. 运行块.
+ ng内置的服务,如果我们想要使用.让服务脱离控制器执行.

>## 2.让服务脱离控制器执行.
+ 模块对象提供一个方法,叫做run,直接使用服务.而不依赖于控制器.
    - 参数: 数组,前面写上要使用的服务的名称,后面1个回调

>## 实现：
```js
app.run(["$rootScope",function($rootScope){
    $rootScope.age = 100;
}]);

app.controller("hmCtrl",["$scope",function($scope){
    $scope.name = "jack"
}]);
app.controller("hmCtrl",["$rootScope",function($rootScope){
}])
```