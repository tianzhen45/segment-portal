FROM nginx

WORKDIR /dist
COPY dist/static ./static
COPY dist/index.html ./
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
