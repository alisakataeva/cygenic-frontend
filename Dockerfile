FROM node:18.15.0-alpine

EXPOSE 8000

WORKDIR /app

COPY package*.json  .

RUN npm ci

COPY . .

CMD ["npm", "run", "dev"]