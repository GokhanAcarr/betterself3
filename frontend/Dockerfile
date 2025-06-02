# 1. Aşama: Angular build
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2. Aşama: Nginx ile sun
FROM nginx:alpine

# Nginx config dosyasını kopyala
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Angular build çıktısını kopyala
COPY --from=build /app/dist/betterself2/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
