---
title: 自定义过滤器
categoies: Angular
---

>## 自定义过滤器

+ 功能: 允许我们自定义过滤器
    - 参数1:自定义过滤器的名称.
    - 参数2:是1个回调函数.
        - 这个回调函数要要求返回1个函数.
             返回的这个函数在过滤器被调用的时候,会被自动执行.
             这个返回的函数至少有1个参数data 代表原本要显示的数据.
             函数内部对原本要显示的数据按照我们自己的业务逻辑进行处理。
             将处理后的数据返回.将返回的数据显示.

+ 具体案例：
    ```html
    <body ng-app="hmApp">
        <div ng-controller="hmCtrl">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </body>

    <script>
        var app = angular.module("hmApp",[]);
        app.controller("hmCtrl",["$scope",function($scope){
            
        }]);
        app.filter("firstBig",function(){
            return function(data){
                return data[0].toUpperCase()+data.slice(1);
            }
        })
    </script>
    ```