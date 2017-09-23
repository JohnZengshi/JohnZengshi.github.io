---
title: AngularJS常见的内部指令
categories: Angular
---

>## AngularJS常见的内部指令

+ 一般情况下都是ng新增的HTML属性
    ```js
    ng-app
    ng-controller
    ng-repeat
    ```
+ ng-show指令
    - 功能：决定元素是否显示还是不显示
    - 取值：
        + boolean值
        + true：显示
        + false:不显示
    - 可以直接给一个boolean值，也可一个一个变量，还可以给一个表达式
    
    - 最终都会显示在DOM树上

+ ng-hide
    - 功能: 决定元素隐藏还是不隐藏.
    - 取值: bool 变量 表达式.
    - 与ng-show的原理一样, 取值是反的.

+ ng-if
    - 功能: 决定元素是否创建在DOM上.
    - 取值: bool 变量 表达式.
    - 当值为false的时候, 这个元素根本就不会创建在DOM上.
       当值为true 这个元素就会被创建在dom上.

+ ng-src
    - 功能：增强图片的路径

+ ng-href
    - 原理和ng-src相同

+ ng-class指令
    - 功能：决定某个类样式是否作用在标签上
    - 取值: 是1个对象.键: 类样式的名称
             值: bool  变量 表达式.
        ```html
        <div class="tow" ng-calss="{red:flase}"></div>
        ```

+ ng-include指令
    - 将外部文件的内容包含在指定的标签内
        + 路径本身还要用单引号引起来
        + 包含文件的原理：
            - 是以AJAX的方式请求页面的内容并加载到DOM中，所以要用服务器的形式打开

+ ng-disable指令
    - 原生的disable属性是存在歧义的.
    - ng-disable: 是否禁用 让取值更加有意义
                   true 禁用 
                   flase 不禁用

+ ng-checked
+ ng-selected
+ ng-readonly 


    