FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install -g nodemon
RUN npm install -g browser-sync
RUN npm install
RUN npm audit fix
COPY . /usr/src/app
EXPOSE 3000
CMD [ "npm", "start" ]