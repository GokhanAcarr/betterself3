# 1. Aşama: Angular build
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --configuration production

# 2. Aşama: Nginx ile sun
FROM nginx:alpine

# Angular 19 build çıktısı: dist/betterself2/browser
COPY --from=build /app/dist/betterself2/browser /usr/share/nginx/html

EXPOSE 80
