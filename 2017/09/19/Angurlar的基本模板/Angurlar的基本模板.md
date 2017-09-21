---
title: Angular的基本模板套用
categories: Angular
---

>## Angurlar的基本模板套用

+ 导入angular.js
    ```html
    <script src="angular.js"></script>
    ```

+ html部分：
    ```html
    <body ng-app="App">
        <div ng-controller="demoCotr"></div>
    </body>
    ```

+ js部分：
    ```js
    <script>
        var app = angular.module("App",[]);
        app.controller("demoCotr",["$scope,function($scope){

        }])
    </script>
    ```