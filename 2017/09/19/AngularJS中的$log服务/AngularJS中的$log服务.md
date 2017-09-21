---
title: Angular中的$log服务
categories: Angular
---

>## Angular中的$log服务

```js
$log.error("这是error输出的消息!"); //错误格式的消息 红色
$log.log("这是log输出的消息!"); //与console.log()没有差别
$log.info("这是info输出的消息");//与console.log()没有差别
$log.debug("这是debug输出的消息!");//与console.log()没有差别
$log.warn("这是warn输出的消息"); //警告格式 黄色
//都是在向控制台输出消息.
//debug方法.
//找bug 打断点 调试 监视代码运行到某1局的时候变量的值是如何变化的.
// $log.debug()通过配置可以让其失效.
```