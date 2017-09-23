---
title: AngularJS中的自定义服务
categories: Angular
tags: 方法总结
---

>## 常见的Angular内置服务：
```js
$log
$timeout
$interval
$http
$filter
```

>## factory方法

+ 模块对象提供了一个factory方法. 这个方法允许我们自定义服务.
    - 第1个参数: 自定义服务的名称.
    - 第2个参数: 是1个数组.前面写上这个服务要依赖的别的服务,最后是1个回调函数.将需要依赖的服务通过形参注入.
    - 回到函数的返回值: 我们定义的服务是提供功能的嘛,所以要求返回1个函数或者1个对象.

+ 具体实现：
```js
app.factory("highven",["$filter",function($filter){
    return {
        now:function(){
            return $filter("data")(new Date(),"yyyy-MM-dd HH:mm:ss")
        },
        format:function(format){
             return $filter("date")(new Date(),format)   
        }
    }
}]);
```

>## serive方法：

+ 使用模块对象的service方法也可以创建服务.
    - 与factory方法不同的是:
        - 该方法不需要明确返回对象或者函数.使用this的方式为返回的对象添加属性和方法.

+ 具体实现：
```js
app.service("highven",["filter",function($filter){
    this.now = function(){
        return $filter("data")(new Date(),"yyyy-MM-dd HH:mm:ss");
    },
    this.format = function(format){
        return $filter("data")(new Date(),format)
    }
}]);
```

>## 调用：
```js
app.controller("demoCtrl",["$scope","serive",function($scope,serive){
    $scope.now = serive.now();
}])
```

+ 注意：
    - service方法只能返回对象.
    - factory可以返回对象也可以返回函数.
