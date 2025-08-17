# python-microservice/Dockerfile
FROM python:3.11-slim

WORKDIR /app
# Optional: keep versions reproducible
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
EXPOSE 5000

ENV FLASK_ENV=production
CMD ["python", "backend_service.py"]
