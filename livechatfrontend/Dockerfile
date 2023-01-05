FROM node:lts-alpine AS build

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 80
EXPOSE 9002

