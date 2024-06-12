---
title: 'SSL certificate problem: unable to get local issuer certificate'
date: 2021-11-10 12:50:21
updated: 2021-11-10 12:50:21
categories: 
- [Solutions, Finished]
tags: 
- Git
---
错误:SSL certificate problem: unable to get local issuer certificate

>这个问题是由于没有配置信任的服务器HTTPS验证.默认,cURL被设为不信任任何CA,也就是说,它不信任任何服务器验证.

只需执行下列命令即可解决

```
git config --global http.sslVerify false
```

# References

- https://blog.csdn.net/weixin_44014995/article/details/109900149