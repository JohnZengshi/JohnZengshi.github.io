---
title: AngularJS的使用步骤
categories: Angular
---

>## AngularJS的使用步骤

+ 使用ng-app指令来指定angularJS的管理范围，
    - 指令：都是ng 自定义的html属性
    - 把这个指令给谁，谁及其纸标签就都被ng管理

+ AngularJS应用以模块化的方式构建的；ng-app指令指定ng管理范围，ng是以模块化的方式管理的
    - angular是一个暴露的全局变量
        + 有一个方法：module
            - 功能：创建模块：
            - 参数1： 创建的模块的名字.这个名字要和ng-app的值保持一致否则创建出来的模块就无法管理ng-app 
            - 参数2：是一个数组 写上要依赖的别的模块的名字.
            - 返回值：就是常见出来的模块对象

+ 创建控制器
    - 模块对象有一个方法controller
        + 功能: 创建控制器
        + 参数1：控制器名称
        + 参数2：数组

+ 关联与控制器相关的视图.
    - 使用ng-controller指令指定与控制器相关的视图

+ 数据模型 model
    - $scope就是数据模型，用来存储展示数据
        + $scope是一个对象
        + 控制器可以往$scope中储存数据
        + 这个$scope中的数据还可以在与控制器相关联的视图中访问
            - 在视图中直接写$scope的属性就能拿值.
        控制器: $scope.xxx