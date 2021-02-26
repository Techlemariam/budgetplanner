FROM openjdk:8-jre-alpine
COPY target/budgetplanner-0.0.1-SNAPSHOT.jar /usr/src/budget-planner/
WORKDIR /usr/src/budget-planner
EXPOSE 3080
CMD ["java", "-jar", "budgetplanner-0.0.1-SNAPSHOT.jar"]