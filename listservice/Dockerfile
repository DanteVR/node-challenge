FROM node:14

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json tsconfig.json yarn.lock ./
RUN yarn install 
COPY . .

EXPOSE 4003
CMD ["npm", "start"]