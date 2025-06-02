# 1. Build stage
FROM node:alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production

# 2. Production stage
FROM nginx:alpine

# Build sonrası oluşan dist dosyalarını nginx'in default root dizinine kopyala
COPY --from=builder /app/dist/betterself2 /usr/share/nginx/html

# 80 portu expose et
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
