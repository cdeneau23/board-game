FROM node:18

# Create app directory
WORKDIR /usr/src/app

COPY dist/apps/cards .
ENV PORT=4200
ENV NX_API_URL="https://game-contentful-integratation.herokuapp.com"


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install react-scripts -g 
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

CMD ["npm", "start"]