---
title: AngularJS中配置跨域白名单
categories: Angular
tags: 开发技巧
---

>## $http在跨域的时候,为了安全,必须要配置1个跨域白名单.

```js
var app = angular.module("hmApp",[]);
app.controller("hmCtrl",["$scope",function($scope){

}]);
app.config(["$sceDelegateProvider",function(sceDelegateProvider){
sceDelegateProvider.resourceUrlWhitelist([
    "http://www.baikdu.com"
]);
}])
```