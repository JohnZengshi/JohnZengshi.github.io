---
title: 对AJAX的进一步理解
categoies: AJAX
tags: 建站技巧
---

>## AJAX

+   是一种异步请求的技术.页面的局部刷新
+   浏览器向服务器发送数据的时候.发送的数据是分格式的.
    -   当我们以get方式向服务器发送数据的时候,发送的数据的格式:Query String
    -   当我们以post方式向服务器发送数据的时候,发送的数据的格式默认是: Request Payload
        + 如果我们以post方式向服务器发送数据,发送的数据的格式是Request Payload, 服务器绝大多数情况下不会解析接收，服务器会解析接收form data格式的数据.
           所以,为了服务器可以正常接收我们post过去的数据.
           我们就要将默认的Request Payload格式的数据转换为服务器认识的form data格式的.
    -   如何转form data格式
        ```js
          xhr.setReauestHeader("content-type","application/x-www-form-urlencoded")
          //将post方式发送的数据由默认的Request Payload格式转换为form data
        ```

+   总结：
    - 向服务器发送的数据是分格式的
    - 以get方式发送的数据的格式是:Query String服务器可以解析接收
    - 以post方式发送的数据,其格式默认是Request Payload服务器大多数情况下,是不会解析接收这种格式的.
    - post接口如果没有做特殊说明,发送的数据的格式一定要转换成form data.

+   具体实现：
    ```js
      <script>
          function ajaxGet(){

              //1.创建异步对象
              var xhr = new XHLHttpRequest();

              //2.设置请求的方式和资源的路径
              xhr.open("get","./php/stus.php");

              //3.注册事件
              xhr.onreadystatechange = function(){
                  //当xhr异步对象已经拿到了服务器返回的数据
                  //服务器正确处理
                  if(xhr.readyState == 4 && xhr.status == 200){
                      console.log(xhr.responseText)
                  }
              }

              //4.发送
              xhr.send();
          };

          function ajaxPost(){
              var xhr = new  XMLHttpRequest();
              xhr.open("post","./php/stus.php");
              //xhr异步对象向服务器请求数据的时候,它有四种状态
              //onreadystatechange 只要xhr的状态发生了改变就会触发.
              //准备发送  正在发送  正在接受  接受完成 4
              //每一种状态都有1个状态码.

              xhr.onreadystatechange = function(){
                  if(xhr.readyState == 4 && xhr.status == 200){
                      console.log(xhr.responseText);
                  }
              }
              xhr.send();
          };

          function ajaxGetWithData(){
              var xhr = new XMLHttpRequest();
              xhr.open("get","./php/get.php?name=jack&age=18");
              xhr.onload = function(){
                  if(xhr.status == 200){
                      console.log(xhr.responseText);
                  }
              }
              //onload是1个事件: 当xhr的状态变为4的时候触发用了onload事件就不需要判断xhr.readyState == 4
              xhr.send();
          };

          function ajaxPostWithData(){
              var xhr = new XMLHttpRequest();
              xhr.open("post","./php/post.php")

              xhr.setRequsetHeader("content-type","application/x-www-form-urlencoded");

              xhr.onload = function(){
                  if(xhr.status == 200){
                      console.log(xhr.responseText);
                  }
              };
              xhr.send("name=admin&pwd=123456");
          }

      </script>
    ```

    ```html
      <body>
          <button onclick="ajaxGet()">ajax纯get请求</button>
          <button onclick="ajaxPost()">ajax纯post请求</button>
          <button onclick="ajaxGetWithData()">get请求带数据</button>
          <button onclick="ajaxPostWthData()">post请求带数据</button>
      </body>
    ```

+   还有一种改变数据格式的方法：
    ```html
      <form action="./php/xxx.php" method="post" enctype="multipart/form-data">
          <input type="file" name="file">
          <input type="submit">
      </form>
    ```
