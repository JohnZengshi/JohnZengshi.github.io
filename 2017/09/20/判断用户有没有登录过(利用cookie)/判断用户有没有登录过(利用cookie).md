---
title: 判断用户有没有登录过(利用cookie)
categories: 开发技巧
tags: 开发技巧
---

>## 判断用户有没有登录过

+ 获取用户名和头像
    ```js
    var userInfoStr = $.cookie("userInfo");
    ```

+ 判断：
    ```js
    if(!userInfoStr){
        location.href = "login.html"
    }
    ```