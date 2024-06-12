---
title: Hexo-生成Sitemap
date: 2021-01-10 15:04:02
updated: 2023-01-10 15:04:02
categories: 
- [Solutions, Finished]
tags:
- Hexo
- SEO
- Sitemap
---
# 前言
>站点地图描述了一个网站的架构. 它可以是一个任意形式的文档,用作网页设计的设计工具,也可以是列出网站中所有页面的一个网页,通常采用分级形式.
这有助于访问者以及搜索引擎的爬虫找到网站中的页面.

站点地图为SEO带来的好处:
1. 为搜索引擎爬虫提供可以浏览整个网站的链接;
2. 为搜索引擎爬虫提供一些链接,指向动态页面或者采用其他方法比较难以到达的页面;
3. 如果访问者试图访问网站所在域内并不存在的URL,那么这个访问者就会被转到"无法找到文件"的错误页面,而网站地图可以作为该页面的"准"内容.

说白了就是让搜索引擎的爬虫,尽可能多的收录你站点上的页面,页面收录的越多,你的网站的流量就会越大.

# 正文

## Google版本
```bash
npm install hexo-generator-sitemap --save
```
## Baidu版本(慎用)
```bash
npm install hexo-generator-baidu-sitemap --save
```
~~截止文章发布之时,`hexo-generator-baidu-sitemap`安装之后,会报一堆WARN~~

## 配置_config.yml

安装结束后,在`_config.yml`中找到`URL`,改成你自己的域名.

```yaml
# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: YOUR SITE URL
permalink: :year/:month/:day/:title/
permalink_defaults:
pretty_urls:
  trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
  trailing_html: true # Set to false to remove trailing '.html' from permalinks

```

更改完成后，每次`hexo g`的时候,会自动在`public`文件夹下生成`sitemap.xml`和`baidusitemap.xml`分别用于Google和百度

# References

- https://zhuanlan.zhihu.com/p/150999914