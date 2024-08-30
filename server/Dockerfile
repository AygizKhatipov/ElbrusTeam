FROM node:22.3.0-alpine


ENV NODE_ENV production


WORKDIR /usr/src/app

COPY package*.json ./


RUN npm ci

COPY . .


EXPOSE 80


CMD node app.js
