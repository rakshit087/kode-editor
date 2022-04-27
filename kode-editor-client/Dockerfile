#Base Image
FROM node:lts-alpine
#Running Commands
RUN mkdir /home/app
WORKDIR /home/app
#Copying files from host to container
COPY . /home/app
#npm install
RUN npm install -g yarn
RUN yarn install
#exposing ports
EXPOSE 3000
# start app
CMD ["npm", "start"]
