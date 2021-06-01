FROM node

COPY package*.json ./
RUN npm install

COPY index.js index.js

CMD ["npm", "start"]