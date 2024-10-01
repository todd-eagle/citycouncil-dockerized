FROM php:8.2-fpm-alpine3.20

WORKDIR /var/www/html

COPY html/ /var/www/html/
