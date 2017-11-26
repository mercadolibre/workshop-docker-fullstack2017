FROM debian:stable

ADD ./node-v9.2.0-linux-x64.tar.xz /usr/local/bin
ENV PATH=$PATH:/usr/local/bin/node-v9.2.0-linux-x64/bin
RUN ln -s /usr/local/bin/node-v9.2.0-linux-x64/bin/node /usr/local/bin/node-v9.2.0-linux-x64/bin/nodejs
RUN mkdir /utils
ADD ./run_app.sh /utils
ENTRYPOINT ["/utils/run_app.sh"]
EXPOSE 5000
ADD ./nodeapp /app
WORKDIR /app
RUN npm install
ENV REDIS_HOST=redis
