FROM node:16-alpine

WORKDIR /frontend

COPY package*.json .

RUN npm install --loglevel=error

COPY . .

ENV BROWSER=none

ENTRYPOINT ["npm"]

CMD ["start"]
