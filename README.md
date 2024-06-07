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
部署nginx，修改nginx.conf
```
location /seg {
proxy_pass http://segment:9999/seg; // 修改为后端路径
}
```
