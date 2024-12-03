# Sử dụng node để build ứng dụng
FROM node:20.18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
