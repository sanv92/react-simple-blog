FROM node:8.9.3-alpine

RUN adduser -S app
USER app

WORKDIR /home/node/app

COPY ../package.json /home/node/app
COPY ../package-lock.json /home/node/app

RUN npm install

COPY ../ /home/node/app

CMD npm run start:dev
EXPOSE 8080
