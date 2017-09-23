---
title: jQuery中的submit事件
data: 2015/11/9 21:50:23
categories: jQuery
tags: 开发技巧
---

>## 定义和用法

+ 当提交表单时，会发生submit事件，改事件只适用于表单元素，

>## 语法

```bash
    $(selector).on("submit",function(){})
    //注意：每个需要提交的表单元素都要有对应的name属性值
```

>## 如果想要阻止某个事件的默认行为：(两种方法)（原因：页面跳转，用户名和密码的校验就是败了）

+ 事件回调函数有一个参数，表示事件对象e，通过e.preventDefault()实现。
+ 事件回调函数最后写上：return false;
