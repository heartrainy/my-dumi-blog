---
title: Git
order: 2
toc: menu
---

## git clone无反应解决方法
解决方案：

使用github的镜像网站进行访问，github.com.cnpmjs.org，我们将原本的网站中的github.com 进行替换。如下
```
#原地址
git clone https://github.com/kubernetes/kubernetes.git
#改为
git clone https://github.com.cnpmjs.org/kubernetes/kubernetes.git
```