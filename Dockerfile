FROM node:10
COPY ./ /vue
WORKDIR /vue
RUN npm install && npm run build

FROM nginx
RUN mkdir /app
COPY /vue/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

ENV PORT 8081
EXPOSE 8081
