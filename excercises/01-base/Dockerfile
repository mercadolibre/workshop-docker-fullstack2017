FROM debian:stable
#Update apt packages
RUN apt-get update
#Install curl and net-tool commands
RUN apt-get install -y -f curl net-tools
#Change entrypoint
ENTRYPOINT ["/bin/ping"]
#Change cmd 
CMD ["mercadolibre.com"]
