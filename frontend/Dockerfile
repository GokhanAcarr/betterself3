# 1. Aşama: Angular uygulamasını derle
FROM node:18 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2. Aşama: NGINX ile servis et
FROM nginx:latest

# nginx.conf dosyasını kopyala
COPY nginx.conf /etc/nginx/nginx.conf

# Angular build çıktısını nginx'in html klasörüne kopyala
COPY --from=build /app/dist/betterself2/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
