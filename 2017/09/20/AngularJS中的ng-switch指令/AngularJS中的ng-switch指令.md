---
title: Angular中的ng-switch指令
categories: Angular
---

>## ng-switch指令

+ 功能: 对某1个变量的值进行匹配.匹配成功的元素将会被创建.
  ```js
  	//js
    switch(num){
        case 10:
            xxx
            break;
        case 20:
            xxx
            break;
        default:
            xxx
            break;
    }

    <!-- ------------ -->
    //AngularJS

    <body ng-app="hmApp">
        <div ng-controller="hmCtrl">
            <ul ng-switch="lesson">
                <li ng-switch-when="python"></li>
                <li ng-switch-when="python"></li>
                <li ng-switch-default="python"></li>
            </ul>
        </div>
    </bod>

    <script>
        var spp = angular.module("hmApp",[]);
        app.controller("hmCtrl",["$scope",function($scope){
            $scope.leson = "python"
        }])
    </script>
  ```