---
title: 什么时候使用shim
categories: RequireJS
tags: RequireJs中遇到的坑
---

># 什么时候使用shim
+ shim只用于第三方模块
+ shim一般适用于：
    - a.引用了两个第三方模块，
    - b.之间存在依赖关系，
    - c.其中一个不支持AMD规范
        + 列如：导入了jquery/bootstrap，bootstrap依赖了jquery，bootstrap不支持AMD规范，所以采用了shim