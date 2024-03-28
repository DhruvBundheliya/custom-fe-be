FROM jenkins/jenkins:latest
ENV JAVA_OPTS="-Djenkins.install.runSetupWizard=false"
RUN /usr/local/bin/
RUN ln -sf /usr/share/zoneinfo/Your/Timezone /etc/localtime
expose 8080
