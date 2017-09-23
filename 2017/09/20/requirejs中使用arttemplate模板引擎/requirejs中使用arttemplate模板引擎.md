---
title: requirejs中使用arttemplate模板引擎
categories: Requirejs
tags: 开发技巧
---
>## requirejs中使用arttemplate模板引擎

+ 1、把代码放到项目中的指定位置
+ 2、配置模板引擎的路径
+ 3、在需要编译模板的文件中导入该模块，可以通过形参获取模板引擎的入口函数

    ```bash
    require(["template"],function(template){
         //这里的形参template就是arttemplate模板引擎的入口函数
    })
    ```

>## 常用的API

+ tempalte(script的id，数据)

+ template.render(模板内容，数据)