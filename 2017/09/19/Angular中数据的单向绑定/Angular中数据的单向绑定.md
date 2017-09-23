---
title: Angular中数据的单向绑定
categories: Angular
---

>## Angular中数据的单向绑定

+ 数据的单向绑定
    - 在控制器中制造数据
    - 将制造好的数据存放在$scope数据模型中
    - 在视图中显示$scope中的数据

+ 数据绑定符号
    ```js
    {{}}符号其实是ng-bind的简写形式
    ```
+ 闪烁问题
    - 原因:浏览器在解析的时候,变量的值还没有确定.
    - 解决方案:
        - 使用ng-bind指令.
        - 使用ng-cloak指令.
           会将ng-cloak标签先隐藏.当值确定了以后再显示出来.
        - 将导入Angular的script标签放在最上面.