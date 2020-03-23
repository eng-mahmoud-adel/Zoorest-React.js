#LTS node version at the time of file creation
FROM node:12.16.1

# Set working directory
WORKDIR /var/www/html

# add `/app/node_modules/.bin` to $PATH
ENV PATH /var/www/html/node_modules/.bin:$PATH


# install and cache app dependencies
COPY package.json /var/www/html/package.json

RUN npm i npm@latest -g
#RUN npm audit
RUN npm install
#RUN npm install react-scripts@3.0.1 -g

# start app
CMD ["npm", "start"]
