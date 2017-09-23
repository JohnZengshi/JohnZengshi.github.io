---
title: AngularJS中的$filter服务
categories: Angular
---

>## AngularJS中的$filter服务

+ 出现filter的地方
    - 过滤器filter从数组中筛选符合条件的元素
        ```html
        {{stus|filter:{name:"jack",age:"18"}}}
        ```
    - 自定义过滤器.
        - 模块对象有一个方法叫：filter,这个方法允许我们自定义过滤器
            ```html
            <span>{{data|自定义过滤器名}}</span>
            <!-- ---------- -->
            app.filter("自定义过滤器名"，function(data){
                return xxx;
            })
            ```
    - filter服务(是一个用在控制器中的过滤器)
        ```js
        var data = $filter("date");
        //date就是一个函数，这个函数就具备了date过滤器的功能
        ```
        - 具体例子：
            ```js
            var app = angular.module("hmApp",[]);
            app.controller("hmCtrl",["$scope","$filter",function($scope,$filter){
                var pirce = 12.151;
                var date = $filter("过滤器的名字")(过滤的参数)
            }])
            ```
