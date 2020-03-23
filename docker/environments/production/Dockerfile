# build environment
FROM node:12.2.0-alpine as build
# Set working directory
WORKDIR /var/www/html

# add `/app/node_modules/.bin` to $PATH
ENV PATH /var/www/html/node_modules/.bin:$PATH


# install and cache app dependencies
COPY package.json /var/www/html/package.json

RUN npm install
RUN npm install react-scripts@3.0.1 -g
COPY . /var/www/html
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /var/www/html/build /var/www/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ../../nginx/ /etc/nginx/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
