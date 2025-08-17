FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

COPY . .
ENV NODE_ENV=production
# Default to service name "java" in compose
ENV JAVA_SERVICE_URL=http://java:8081
EXPOSE 3000

CMD ["node", "api-layer.js"]
