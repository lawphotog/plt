FROM node:15-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk update && apk upgrade
RUN apk add bash curl nano
RUN npm i -g npm@latest

RUN npm install

COPY . .

CMD [ "npm", "run", "pipeline" ]