---
title: windows端口被占用解决方法
author: caiyoubin
date: '2022-05-29'
---

#### 查询端口

`netstat -ano`

#### 查询指定端口

`netstat -ano | findstr "端口号"`

#### 根据进程PID查询进程名称

`tasklist | findstr "进程PID号"`

#### 根据PID杀死任务

`taskkill /F /PID "进程PID号"`

#### 根据进程名称杀死任务

`taskkill -f -t -im "进程名称"`

> 命令末端的字符串需使用双引号或者不使用引号，单引号无效。