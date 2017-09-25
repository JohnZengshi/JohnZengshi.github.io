---
title: 处理通用的ajax请求
categories: RequireJS
tags: 开发技巧
---

>## 处理通用的ajax请求

+ 定义模块：

    ```js
    define([
        "jquery",

    ],function($){
        var obj = {
            ajax:function(url,data,type,callback){
                $.ajax({
                    url:url,
                    data:data,
                    type:type,
                    success:function(res){
                        if(res.code!=200) throw new Error(res.msg);
                        callback(res);
                    }

                })
            }
        };

        var way = ["get","post"];

        way.forEach(function(v){
            obj[v] = funciton(url,data,callback){
                this.ajax(url,data,v,callback);
            }
        })

        return obj;
    })
    ```