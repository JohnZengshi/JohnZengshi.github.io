---
title: ng-repeat指令
categories: Angular
tags: 开大技巧
---

>## ng-repeat指令

+ ng-repeat指令
    - 重复的生成指定的标签
    - 可以遍历数组
    - 如果数组中的元素有重复，那么会遍历失败
    - ng-底层会给数组的每一个元素自动的起一个标识，这个标识不允许重复，默认会将数组中的元素作为每一个元素的标识
    - $index是ng预先定义好的变量，代表每一个元素的下表

    ```js
    ng-repeat = "item in 数组 track by $index"

    ng-repeat = "item in 数组"
    //数组有多少个元素就生成多少个标签

    ng-repeat = "(key,value) in 数组"
    //key每一个健，value每一个值
    ```
    - 只要数据发生变化，那么Dom就会自动的刷新，不需要我们更新Dom


+ 例子(1)：

    ```html

    <body ng-app="APP">
        <div contorller="cotr">
            <table>
                <caption>
                    <tr>
                    <th>编号</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    </tr>
                    
                    <tr ng-repeat="item in stus">
                        <td>{{item.id}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.gender}}</td>
                        <td>{{item.age}}</td>
                    </tr>
                </caption>
            </table>

            <button ng-click="add()">新增学员</button>
        </div>
    </body>

    <script>
        var app = angular.module("App",[]);
        app.controller("cotr",["$scope",function($scpoe){
            $scpoe.stus = [
                id: 1, name: '小明', gender: '男', age: 18 },
                { id: 2, name: '小花', gender: '女', age: 16 },
                { id: 3, name: '小强', gender: '男', age: 14 },
                { id: 4, name: '小东', gender: '男', age: 19 },
                { id: 5, name: '小常', gender: '女', age: 20 }
            ];

            $scope.add = function(){
                stus.push({
                    id:6,
                    name:"打瞌睡的小男孩",
                    gender:"男",
                    age:21
                })
            }
        }])
    </script>

    ```

+ 例子(2):

    ```html
    <body ng-app="App">
        <div ng-controller="demoCtrl">
            <ul>
                <li ng-repeat="(key,value) in arr">{{key}}=={{value}}</li>
                <li ng-repeat="(key,value) in obj">{{key}}=={{value}}</li>
            </ul>
        </div>

        <script>
            var app = angular.modlue("APP",[]);
            app.controller("demoCtrl",["$scope",function($scope){
                $scope.arr = [10,20,30,40,50]
                $scope.obj = {
                    id :1,
                    name :"john",
                    age:21,
                    gender:"男",
                }
            }])
        </script>
    </body>
    ```