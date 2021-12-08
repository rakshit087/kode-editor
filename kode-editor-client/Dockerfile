#Base Image
FROM node
#Running Commands
RUN mkdir /home/app
WORKDIR /home/app
#Copying files from host to container
COPY . /home/app
#npm install
RUN npm install
#exposing ports
EXPOSE 3000
#Initial Command
CMD ["npm","run","start"]