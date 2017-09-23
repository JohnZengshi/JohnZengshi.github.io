---
title: AngularJS中的常见的过滤器
categoies: Angular
tags: 开发技巧
---

>## AngularJS中的常见的过滤器

+ 过滤器：
    - 指对数据进行过滤(处理)
    - 我们现在讲的过滤器,是用在视图中的.对原本要显示在视图中的数据进行过滤然后再显示.
    - 过滤器的使用:
        ```js
        {{原本要显示的数据|过滤器名称:参数:参数}}
        ```

+ currency 货币过滤器
    - 功能：对价格进行过滤
    ```html
    {{pirce|currency}}   //默认在前面显示一个美刀符号.
    {{pirce|currency:"￥"}}  //自定义货币符号.
    {{pirce|currency:"￥":"2"}}  //自定义保留的小数的位数 四舍五入
    ```

+ date过滤器
    + 功能: 对日期进行过滤
    ```html
    {{now|date}}   //默认的格式是美国佬的格式.
    {{now|date:"yyyy-MM-dd HH:mm:ss"}}   //自定义时间的格式

    y: year 年. 
    M: 月份
    d: 几号.
    H: 24小时制的小时
    h: 12小时制的小时.
    m: 分钟
    s：秒.
    ```

+ uppercase
+ lowercase

+ limitTo过滤器
    - 截取数组/字符串中指定的位数的元素
        ```html
        {{arr|limitTO:n}}
        //n是1个正数的话，就显示前面的n个
        //n是1个负数的话，就显示后面的n个

        {{arr|limitTo:n:m}}
        //当n是正数，从n个开始往后显示m个
        //当n是负数，从n个开始往前显示m个
        ```

+ number过滤器
    - 可以对数字进行指定的位数保留
        ```html
        {{num|number:2}}
        //保留两位小数，四舍五入
        ```

+ json过滤器
    - 将一个对象转换为json字符串显示
        ```html
        {{person|json}}
        //当我们显示1个对象的时候 如果没有调json过滤器ng会自动的帮助我们调这个过滤器.
        ```

+ orderBy过滤器
    - 对数组元素进行排序
    ```html
    {{stus|orderBy:"age"}}  //对数组中的对象以age属性排序，默认为升序。

    {{stus|orderBy:"age":"true"}}  //自定义降序，false升序
    ```
    - 如果是一个基本数据类型数组
    ```html
    {{arr|orderBy}}  //默认升序
    {{arr|orderBy:null:true}}  //前面加个null可以指定降序
    ```

+ filter过滤器
    - 从数组中筛选符合条件的元素
    ```html
    {{staus|filter:{age:16,genger:"男"}}}
    //从数组中指定筛选age-16， genger-男 的元素
    ```