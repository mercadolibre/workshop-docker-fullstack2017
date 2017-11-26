FROM nginx

RUN apt update && apt install -y -f curl nodejs vim
RUN rm -fr /dev/stdout /dev/stder
RUN ln -sf /dev/stdout /var/log/nginx/host.access.log \
	&& ln -sf /dev/stderr /var/log/nginx/host.error.log

ADD ./default.conf /etc/nginx/conf.d/default.conf

RUN mkdir /myhtmls
