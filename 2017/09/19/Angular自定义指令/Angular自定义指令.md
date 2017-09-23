---
title: Angular自定义属性
categories: Angular
tags: 开发技巧
---

>## Angular自定义属性

+ 模块对象提供了一个方法: directive 
    - 功能: 自定义指令.
    - 参数1: 自定义指令的名称
    - 参数2: 是1个回调函数.这个回调函数在解析指令的时候会执行,报错的原因是因为回调函数没有按照规范写.
        + 这个回调函数要求返回1个对象.
        + 自定义的指令要做的事情通过这个对象的键值对来指定.
        + restrict:  指定自定义指令的类型.
            ```js
            E Element 标签.
            A Attr    属性
            C Class  类
            M mark 注释
            ```
+ 注意: 如果自定义指令的名称是按照驼峰命名的 那么在使用的时候要拆开写.
    ```js
    hmTag   hm-tag
    ```

+ 例子：

    ```html
    <body ng-app="hmApp">
        <div ng-controller="hmCtrl">
            <div hm-tag="jack"></div>
            <div hm-tag="rose"></div>
            <div hm-tag="tudo"></div>
        </div>
    </body>

    <script>
        var app = angular.module("hmApp",[]);
        app.controller("hmCtrl",["$scope",function($scope){

        }]);
        app.directive("hmTag",function(){
            return {
                restrict:"EA",
                template:"...",
                replace:true,
                link:function(scope,element,attrs){
                    element.on("click",function(){
                        alert(attrs.hmTag)
                    })
                };
            }
        })
    </script>
    ```

+ 注意：link是一个函数：
    - scope: 不管
    - element: 代表被设定了指令的元素，直接被ng封装为一个jqlite对象
    - attrs: 可以拿到被设定指令的元素的所有属性和属性值
    - 如果发现某个元素这定了属性值就回去执行这个指令的函数