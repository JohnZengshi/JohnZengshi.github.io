---
title: jQuery源码分析(02)--整体架构
categories: jQuery源码分析
tags: 没事研究来玩的
---

## jQuery整体架构

任何程序代码不是一开始就复杂的，成功也不是一躇而蹴的，早期jQuery的作者John Resig在2005年提议改进Prototype的“Behaviour”库时，只是想让其使用更简单才发布新的jQuery框架。起初John Resig估计也没料想jQuery会如此的火热。我们可以看到从发布的第一个1.0开始到目前最新的2.1.1其代码膨胀到了9000多行，它兼容CSS3，还兼容各种浏览器，jQuery使用户能更方便地处理DOM、事件、实现动画效果，并且方便地为网站提供AJAX交互。

1. 最新jQuery2.1.1版本的结构：

    ```bash
    <script type="text/javascript">
    ;(function(global, factory) {
        factory(global);
    }(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
        var jQuery = function( selector, context ) {
            return new jQuery.fn.init( selector, context );
        };
        jQuery.fn = jQuery.prototype = {};
        // 核心方法
        // 回调系统
        // 异步队列
        // 数据缓存
        // 队列操作
        // 选择器引
        // 属性操作
        // 节点遍历
        // 文档处理
        // 样式操作
        // 属性操作
        // 事件体系
        // AJAX交互
        // 动画引擎
        return jQuery;
    }));

    jQuery.each( [ "get", "post" ], function( i, method ) {
        jQuery[ method ] = function( url, data, callback, type ) {
            // Shift arguments if data argument was omitted
            if ( jQuery.isFunction( data ) ) {
                type     = type || callback;
                callback = data;
                data     = undefined;
            }
            return jQuery.ajax({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            });
        };
    });
    </script>
    ```
2. jQuery的模块依赖图：
	
	```
	![alt text](http://img.mukewang.com/53fa8fec0001754806930473.jpg)
	```