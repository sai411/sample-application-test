# ---- Build stage ----
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app

# Cache deps
COPY pom.xml .
RUN mvn -q -DskipTests dependency:go-offline

# Build
COPY src ./src
RUN mvn -q -DskipTests package

# ---- Runtime stage ----
FROM eclipse-temurin:17-jre
WORKDIR /app

# Default to service name "python" in compose
ENV PYTHON_SERVICE_URL=http://python:5000
EXPOSE 8081

COPY --from=build /app/target/*.jar /app/app.jar
ENTRYPOINT ["java","-jar","/app/app.jar"]
