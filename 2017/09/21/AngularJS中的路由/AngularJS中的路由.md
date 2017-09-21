---
title: AngularJS中的路由
categories: Angular
tags: 黑科技
---

>## 1.单页面应用的原理
+ 通过haschange事件监听到锚点的变化，进而可以实现为不同的锚点显示不同的视图，单页面应用就是基于这一原理的
    - angularjs中的路由: 就是基于这一原理实现的.

>## 2.使用路由的步骤
+ 1.下载路由插件.
+ 2.将这个route插件引入
+ 3.创建模块的时候,要依赖于ngRoute模块.
+ 4.配置路由
    - 设定规则. 当url的锚点值发生变化的时候,要怎么做.
    - 默认情况下,angularjs路由中的锚链接的值必须是以#!开头.

>## 3.注意的细节:
+ 默认情况下,锚链接的锚点值必须要以#!开头.
+ 在使用when方法匹配的时候,前面的#!不必写.
+ temlplateUrl 表示匹配成功的时候 请求指定的资源
+ 将请求回来的资源放在ng-view下面.

>## 4.$routeProvider
+ 使用$routeProvider进行路由规则的配置
+ when方法： 设定当路由匹配成功以后,要做的事情.
    ```js
    when("路由"，{

    })
    ```
+ 但成功匹配后，要做的事情通过第二个参数对象来指定。
    - 第二个参数：对象
    ```js
    templateUrl:""
    //资源路径，匹配成功后请求这个资源，将请求回来的资源放在ng-view

    otherwise方法
    //当所有的路由规矩都不匹配的时候，做的事情

    "/"代表空路由
    ```
>## 5.when方法的第二个参数的键值对的说明
+ templateUrl
+ redirectTo 跳转路由
    ```js
    redirectTO:"/home"
    //当路由匹配成功以后，修改路由为"/home"
    ```
+ template:""
+ controller:""  值是控制器的名称会将请求回来的视图与这个控制器进行关联.这样的话,就可以在控制器中制造数据 存储到$scope中.视图中就可以访问.

>## 6.spa的优缺点
+ 优点：用户体验极致
+ 对seo不友好


>## 7.具体代码：
```html
<body ng-app="hmApp">
    <div ng-contorller="hmCtrl">
        <nav>
            <a href="#/home">首页</a>
            <a href="#/my">我的音乐</a>
            <a href="#/find">发现音乐</a>
        </nav>
        <section ng-view></section>
    </div>
</body>
```

```js
<script>
    var app.angular.module("hmApp",["ngRoute"]);
    app.config(["$locationProcider",function($locationProcider){
        $locationProcider.hashPrefix(""); 
    }])

    //针对 路由规则(锚点值变化) 进行配置
    app.config(["$rotoueProcider",function($rotoueProcider){
        $rotoueProcider.when("/home",{
            templateUrl:"./musice/home.html"
        }).when("/my",{
            template:"<h1>哈哈哈哈</h1>",
            controller:"hmCtrl"
            //将请求回来的视图和名称叫做“myCtrl”的控制器关联起来
        }).when("/",{
            redirectTo:"/home"
            //如果现在的URL地址上的路由是一个空路由，name就跳转到、home这个路由
        }).otherwise({
            templateUrl:"./404.html"
        })
    }]);

    app.controller("hmCtrl",["$scope",function($scope){
        $scope.name = "歌曲"
    }])
</script>
```

>## 路由参数

+ 路由的后面可以跟参数.
    - 可以跟Query String类型的参数.
        ```html
        <a href="#/my?name=jack&age=18">我的音乐</a>
        //仍然可以成功匹配 /my 这个路由规则.
        ```
+ 需要特别注意的是:
    - 当路由匹配成功以后,ng路由机制会去请求my.html资源回来放到ng-view中.
    - 并不会主动的将参数发给服务器.

    ```js
    app.controller("hmCtrl",["$scope","$routeParams",function($scope,$routeParams){
        console.log($routeParams);
    }])
    ```