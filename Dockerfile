FROM nginx:1.20-alpine

WORKDIR /usr/share/nginx/html/

COPY ./dist /usr/share/nginx/html/