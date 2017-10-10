FROM mhart/alpine-node:8
MAINTAINER Abu Shumon

RUN mkdir -p /usr/src/app/mock-server

WORKDIR /usr/src/app/mock-server

COPY package.json .
RUN npm install --production

COPY app.js .
COPY server.js .
COPY api/ ./api
COPY views/ ./views

EXPOSE 8095
CMD ["npm", "start"]