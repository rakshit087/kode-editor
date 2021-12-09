#Base Image
FROM node:lts-alpine
#Running Commands
RUN mkdir /home/app
WORKDIR /home/app
#Copying files from host to container
COPY . /home/app
#npm install
RUN npm install
#exposing ports
EXPOSE 8000
#Initial Command
CMD ["node","/home/app/app.js"]