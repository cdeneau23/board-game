FROM node:18

# Create app directory
WORKDIR /usr/src/app

COPY dist/apps/contentful-integration .
ENV PORT=3000
ENV CONTENTFUL_SPACE="l1dczkanjcjw"
ENV CONTENTFUL_TOKEN="T5mReKJzgc1KE3c27YhKTySXF7xTjplmOhkxuo1a2qw"


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE ${PORT}
CMD [ "node", "main.js" ]