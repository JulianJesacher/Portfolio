FROM nginx:1.23.0-alpine
COPY . /usr/share/nginx/html/
RUN chmod +x /usr/share/nginx/html/writeToConfig.sh
RUN /usr/share/nginx/html/writeToConfig.sh