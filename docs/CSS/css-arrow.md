---
title: 纯CSS 实现关闭图标 icon
group: 
  title: CSS
---

# 纯CSS 实现关闭图标 icon

1、html部分
```
<span id="close"></span>
```

2、css部分
```
#close {
    display: inline-block;
    width: 30px;
    height: 4px;
    background: #333;
    transform: rotate(45deg);
}

#close::after {
    content: '';
    display: block;
    width: 30px;
    height: 4px;
    background: #333;
    transform: rotate(-90deg);
}
```

3、效果图

![](/images/icon-close.png)