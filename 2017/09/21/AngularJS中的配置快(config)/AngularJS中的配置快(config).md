---
title: AngularJS中的配置块(config)
categories: Angular
---

>## 1. 配置块.
+ 在配置运行阶段,ng允许我们对ng内置的一些服务做一些修改.

>##  2.如何进行针对服务进行配置.
+ 模块对象(app)提供了一个方法: config
    - 功能: 就是对内置的服务进行修改 对内置的服务进行配置.
    - 参数: 是1个数组,数组前面写上你要配置的服务对应的Provider
        ```js
        $log   $logProvider
        $http  $httpProvider

        //每一个服务都有一个对应的Provider
        ```
    - 最后一个元素是一个回调函数，通过形参将这个Provider注入

>## 实现：
```html
<body ng-app="hmApp">
    <div ng-contorller="hmCtrl">
        <h2>{{name|firstBig}}</h2>
    </div>
</body>

<script>
    var app = angular.module("hmApp",[]);
    app.config(["$logProvider","$filterProvider",function($logProvider,$filterProvider){
        $logProvider.debugEnabled(false);
        $filterProvider.register("firstBig",function(){
            retrun function(data){
                return data[0].toUpperCase() + data.slice(1);
            }
        })
    }]);
    app.controller("hmCtrl",["$scope","$log",function($scope,$log){
        $log.debug("这是debug信息");
        $log.error("error!");
        $scope.name = "hahah"
    }])
</script>
```