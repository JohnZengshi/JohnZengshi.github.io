---
title: js的加载有两种方法
categories: 网站搭建
tags: 开发技巧
---

>## 同步加载：

```html
<script src="http://yourdomain.com/script.js"></script>
<script src="http://yourdomain.com/script.js"></script>

//同步模式又称阻塞模式，会阻止浏览器的后续处理，停止后续的解析，只有当当前加载完成，才能进行下一步操作，所以默认同步执行才是安全的。但这样如果js中有输出document内容、修改dom、重定向等行为，就会造成页面堵塞。所以一般建议把<script>标签放在<body>结尾处，这样尽可能减少页面阻塞。
```

>## 异步加载：

+ 异步加载又叫非阻塞加载，浏览器在下载执行js的同时，还会继续进行后续页面的处理。主要有三种方式。
    - 方法一：也叫Script DOM Element
        ```js
        (function(){
            var scriptEle = document.createElement("script");
            scriptEle.type = "text/javasctipt";
            scriptEle.async = true;
            scriptEle.src = "http://cdn.bootcss.com/jquery/3.0.0-beta1/jquery.min.js";
            var x = document.getElementsByTagName("head")[0];
            x.insertBefore(scriptEle, x.firstChild);	
        })

        //<async>属性是HTML5中新增的异步支持。此方法被称为Script DOM Element 方法。Google Analytics 和 Google+ Badge 都使用了这种异步加载代码

        (function(){;
            var ga = document.createElement('script'); 
            ga.type = 'text/javascript'; 
            ga.async = true; 
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; 
            var s = document.getElementsByTagName('script')[0]; 
            s.parentNode.insertBefore(ga, s); 
        })();

        //但是这种加载方式执行完之前会阻止onload事件的触发，而现在很多页面的代码都在onload时还执行额外的渲染工作，所以还是会阻塞部分页面的初始化处理。
        ```

    - 方法二：onload时的异步加载
        ```js
        (function(){
            if(window.attachEvent){
                window.attachEvent("load", asyncLoad);
            }else{
                window.addEventListener("load", asyncLoad);
            }
            var asyncLoad = function(){
                var ga = document.createElement('script'); 
                ga.type = 'text/javascript'; 
                ga.async = true; 
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; 
                var s = document.getElementsByTagName('script')[0]; 
                s.parentNode.insertBefore(ga, s);
            }
        )();
        ```