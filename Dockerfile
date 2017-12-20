FROM node:8.9.3


WORKDIR /home/node/app

COPY ./package.json /home/node/app
COPY ./package-lock.json /home/node/app

RUN npm rebuild node-sass
RUN npm install

COPY . /home/node/app

CMD npm run start:dev
EXPOSE 8080
