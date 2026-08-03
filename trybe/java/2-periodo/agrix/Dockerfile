# ==========================
# Etapa de build
# ==========================
FROM maven:3.9.6-eclipse-temurin-17 AS build-image

WORKDIR /to-build-app

# Copia primeiro o pom.xml para aproveitar o cache
COPY pom.xml .

# Baixa as dependências
RUN mvn dependency:go-offline

# Copia o restante do projeto
COPY . .

# Gera o JAR
RUN mvn clean package -DskipTests


# ==========================
# Etapa final
# ==========================
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# Copia apenas o JAR gerado
COPY --from=build-image /to-build-app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
