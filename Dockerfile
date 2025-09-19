# Use official Node.js runtime as a parent image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app source code
COPY . .

# Expose the port your app runs on
EXPOSE 3001

# Command to run the app
CMD ["node", "server.js"]
