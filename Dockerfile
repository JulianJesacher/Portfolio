FROM nginx:1.23.0-alpine
COPY . /usr/share/nginx/html/
COPY 40-writeToConfig.sh /docker-entrypoint.d/
RUN chmod +x /docker-entrypoint.d/40-writeToConfig.sh