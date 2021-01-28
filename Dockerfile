# build stage
FROM node:14.5
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install

#RUN npm run build
CMD ["npm", "start"]