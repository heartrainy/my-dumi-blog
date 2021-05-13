---
title: Css
order: 1
toc: menu
# nav:
#   title: 主题
#   order: 2
---

## 纯CSS 实现关闭图标 icon

**1、html部分**
```
<span id="close"></span>
```

**2、css部分**
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

**3、效果图**

![](/images/icon-close.png)


## 纯CSS 实现三角图标 icon

**1、html部分**
```
<div id="left-arrow"></div>
```

**2、css部分**
```
.left-arrow
{
	border-style: solid;
	width: 0px;  
	height: 0px;  
	border-width: 30px;  
	border-color: transparent green transparent transparent;  
}
```

**3、效果图**

![](/images/icon-arrow1.jpg)