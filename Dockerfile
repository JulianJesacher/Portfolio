FROM nginx:1.23.0-alpine
COPY . /usr/share/nginx/html/
RUN writeToConfig.sh