---
title: AngularJS中的$timeout和$interval服务
categories: Angular
---

>## AngularJS中的$timeout服务

+ $timeout：在指定的时间后做指定的事件
    - 参数1：回调
    - 参数2：时间
    - 停止($timeout服务自带的方法stop())

    ```html
    <body ng-app="hmApp">
        <div ng-controller="hmCtrl">
            <h2 ng-click="stop()">{{name}}</h2>
        </div>
    </body>

    <script>
        var app = angular.module("hmApp",[]);
        app.controller("hmCtrl",["$scope","$timeout",function($scope,$timeout){
            $scope.name = "jack";
            var id = $timeout(function(){
                $scope.name = "rose"
            },2000);
            $scope.stop = function(){
                $timeout.cancel(id);
            }
        }])
    </script>
    ```

+ $interval：每隔指定的时间就做一次指定的事情.
    - 参数1: 回调
    - 参数2: 间隔时间
    - 停止($interval服务自带的方法stop())

    ```html
    <body ng-app="hmApp">
        <div ng-controller="hmCtrl">
            <h2>{{now|date:"yyyy-MM-dd HH:MM:ss"}}</h2>
            <button ng-click="stop()">停止</button>
        </div>
    </body>

    <script>
        var app = angular.module("hmApp",[]);
        app.controller("hmCtrl",["$scope","$interval",function($scope,$interval){
            $scope.now = new Date();
            var id = $interval(function(){
                $scope.now = new Date();
            },1000);
            $scope.stop = function(){
                $interval.cancel(id);
            }
        }])
    </script>
    ```
