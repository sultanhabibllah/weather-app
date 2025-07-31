# Use official Node.js LTS image
FROM node:20

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first, then install dependencies
COPY package*.json ./

RUN npm install

# Copy the rest of your app's source code
COPY . .

# Expose the app port
EXPOSE 8080

# Start the application
CMD [ "npm", "start" ]
