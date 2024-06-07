# segment-portal

> Segment前端项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## docker部署
参考segment README.md

## 非docker部署
部署nginx，复制当前目录下的nginx.conf配置文件到服务器nginx配置目录下，并修改
```
server {
        listen       80;  # 前端端口
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   /dist;     # 前端文件目录
            index  index.html index.htm;
        }

        location /seg {
          proxy_pass http://segment:9999/seg;  # 修改为后端地址
        }
}
```
