FROM debian:stable
#Update apt packages
RUN apt-get update
#Install curl and net-tool commands
RUN apt-get install -y -f curl net-tools nginx
#Entrypoint nginx
ENTRYPOINT ["/usr/sbin/nginx"]
#CMD config file in /configs
CMD ["-c","/configs/nginx.conf"]
#Create app, logs and configs directories
RUN mkdir -p /app/logs /configs
#Add config
ADD ./nginx.conf /configs
#Add app
ADD ./app /app
#Re-link stderr && stdout
RUN ln -sf /dev/stdout /app/logs/access.log \
	&& ln -sf /dev/stderr /app/logs/error.log
#Nginx Port
EXPOSE 80
