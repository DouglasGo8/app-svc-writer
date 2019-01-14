FROM node:8

WORKDIR /usr/src/app

COPY src ./
COPY package*.json ./

RUN npm install

EXPOSE 10250

ENTRYPOINT ["node", "app.js"]
