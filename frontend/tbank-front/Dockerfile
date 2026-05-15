# frontend/tbank-front/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Копируем только файлы пакетов для кэширования слоев
COPY package.json package-lock.json ./
RUN npm install
