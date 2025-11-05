FROM node:16-bullseye-slim
RUN apt update
RUN apt install lsof
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY __tests__ __tests__
COPY .trybe .trybe
COPY src src
COPY .eslintignore .
COPY .eslintrc.json .
COPY .sequelizerc .
COPY jest.config.js .
