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

#COPY . ./
RUN npm run build


# production environment
#FROM nginx:stable-alpine
#COPY --from=build /app/build /usr/share/nginx/html
## new
#COPY nginx/conf.d/website.conf /etc/nginx/conf.d/default.conf
#COPY nginx/nginx.conf /etc/nginx/nginx.conf
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
