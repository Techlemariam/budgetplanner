FROM openjdk:8-jdk-alpine
WORKDIR /usr/src/budget-planner

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src
# COPY target/budgetplanner-0.0.1-SNAPSHOT.jar /usr/src/budget-planner/
RUN apk update
RUN apk add maven
EXPOSE 3080
# CMD ["java", "-jar", "budgetplanner-0.0.1-SNAPSHOT.jar"]