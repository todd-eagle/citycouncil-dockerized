FROM php:8.2-fpm-alpine3.20

EXPOSE 80

WORKDIR /var/www/html

COPY html/ /var/www/html/

COPY nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf