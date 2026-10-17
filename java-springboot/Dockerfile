FROM eclipse-temurin:25-jdk AS build

WORKDIR /usr/src/app

COPY mvnw pom.xml ./
COPY .mvn .mvn
RUN chmod +x mvnw && ./mvnw -B dependency:go-offline

COPY src src

RUN ./mvnw -B package -DskipTests

FROM eclipse-temurin:25-jre
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]