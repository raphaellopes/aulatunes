FROM node:15.11.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --silent
RUN yarn global add react-scripts@4.0.3 --silent 

COPY . ./

CMD ["yarn", "start"]
