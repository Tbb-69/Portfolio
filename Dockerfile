# Use a specific Node.js version as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /index

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Update npm and install dependencies
RUN npm install -g npm@latest && npm install --verbose

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["npm", "start"]
