# backend/Dockerfile
FROM python:3.14-slim

# Отключаем создание pycache и буферизацию логов в консоли
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Устанавливаем зависимости
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Код мы будем прокидывать через volumes, поэтому COPY . . здесь не обязателен для разработки
