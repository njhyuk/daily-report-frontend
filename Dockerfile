FROM node:10
COPY ./ /app
WORKDIR /app
RUN npm install && npm run build
ENV PORT 8080
EXPOSE 8080
