FROM node:slim
ENV NODE_ENV development
COPY . .
RUN npm install
RUN npm install -D nodemon
CMD [ "npm", "run", "dev" ]
EXPOSE 5000