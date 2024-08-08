FROM node:18-alpine

WORKDIR /index

COPY package*.json ./

RUN npm install -g npm@latest && npm install --verbose

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
