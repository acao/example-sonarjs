export $(cat .env | xargs) \
&& sonar-scanner \
-Dsonar.host.url=$SONAR_HOST_URL \
-Dsonar.projectKey=$SONAR_PROJECT_KEY \
-Dsonar.organization=$SONAR_ORGANIZATION \
-Dsonar.login=$SONAR_LOGIN