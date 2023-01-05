FROM node:lts-alpine AS build
WORKDIR /livechatfrontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 80
EXPOSE 9002

