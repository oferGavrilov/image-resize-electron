FROM node:17-alpine as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i --silent

COPY . ./

FROM base as production

ENV NODE_PATH=./build

RUN npm run build