---
title: AngularJS中的$http服务
categoies: Angular
---

>## AngularJS中的$http服务

+ $http服务,ng封装的一个ajax请求工具.

+ 使用$http服务.
    ```js
    $http({
        //一个对象
        //通过对象的键值对来指定请求的参数

        url:  //指定要请求的资源的路径.
        method:  //指定请求的方式 get/post 默认是get
        params: {}  //当请求方式是get的时候,发送的数据要以键值对的形式存储在这个对象中.
        data: "" //字符串. 当请求的方式是post的时候,发送的数据要存储在这个属性中.
        headers: {}  //设置请求头.转换formData格式

        //当请求方式是post的时候,发送的数据的格式ng底层并没有帮我们转换,所以,需要我们手动的加请求头转换formData格式
    })

    //通过链式编程的方式点1个then方法出来.
        1.传入两个回调.
        2.第1个回调:在请求成功的时候执行. 有1个参数(response)
        3.response 代表服务器返回的数据。
        4.response.data可以拿到服务器返回的真正的数据.
        5.第2个回调:在请求失败的时候执行.
    ```

+ 具体实现：
    ```js
    <script>
        var app = angular.module("hmApp",[]);
        app.controller("hmCtrl",["$scope","$http",function($scope,$http){
            $scope.httpGet = function(){
                $http({
                    url:"./php/xxx.php",
                    method:"get",
                }.then(function(response){
                    console.log(response.data)
                },function(){
                    console.log("error!")
                }))

                //不带数据Get请求
            }

            $scope.httpPost = function(){
                $http({
                    url:"./php/xxx.php",
                    method:"post",
                }.then(function(response){
                    console.log(respon.data)
                },function(){
                    console.log("error!")
                }))
                
                //不带数据post请求
            }

            $scope.httpGetWithData = function(){
                $http({
                    url:"./php/xxx.php",
                    method:"get",
                    params:{
                        name:"jack",
                        pwd:"123456"
                    }
                }.then(function(response){
                    console.log(response.data)
                },function(){
                    console.log("error!")
                }))

                //带数据Get请求发送
            }

            $scope.httpPostWithData = function(){
                $http({
                    url:"./php/xxx.php",
                    method:"post",
                    data:"?name='jack'&pwd=1234",
                    headers:{
                        "Content-Type":"application/x-www-form-urlencoded"
                    }
                }.then(funciton(response){
                    console.log(response.data)
                },function(){
                    console.log("error!")
                }))

                //带数据post请求发送
            }
        }])
    </script>
    ```

+ 利用$http进行跨域请求：
    - 只需要将method设置为jsonp就可以
    - 在发起跨域之前，需要设置一个白名单
    ```html
    <body ng-app="hmApp">
        <div ng-controller="demoCtrl"></div>
        <script>
            var app = angular.module("hmApp", []);
            app.config(['$sceDelegateProvider', function ($sceDelegateProvider) {
                
                // 设置跨域白名单
                $sceDelegateProvider.resourceUrlWhitelist(["https://api.asilu.com/weather/"]);
            }])

            app.controller("demoCtrl", ["$scope", "$http", function ($scope, $http) {
                $http({
                    url: "https://api.asilu.com/weather/",
                    params: {
                        city: "深圳"
                    },
                    method: "jsonp"
                }).then(function (response) {
                    console.log(response.data);
                });
            }]);
        </script>
    </body>
    ```