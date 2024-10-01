FROM nginx:alpine

WORKDIR /var/www/html

COPY html/ /var/www/html/
COPY html/img /var/www/html/

COPY nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf