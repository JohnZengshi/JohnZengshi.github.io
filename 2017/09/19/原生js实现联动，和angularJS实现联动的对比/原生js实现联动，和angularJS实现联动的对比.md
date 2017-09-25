---
title: 原生js实现联动，和angularJS实现联动的对比；
categories: Angular
tags: 黑科技
---

>## 原生js实现联动，和angularJS实现联动的对比；

+ 原生js实现联动效果：

    ```html
    <input type="text" id="ipt">
    <h1 id="content"></h1>

    <script>
        var ipt = document.getElementById("ipt")
        var content = document.getElementById("content")

        ipt.onkeyup = function(){
            content.innerText = ipt.value;
        }
    </script>
    ```

+ 用angularJS实现联动效果：
    ```html
    <body ng-app>
        <input type="text" ng-model="val">
        <h1>{{val}}</h1>
    </body>
    //导入angularJS
    <script src="angular.js"></script>
    ```