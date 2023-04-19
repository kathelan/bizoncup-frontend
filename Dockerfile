# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Set the environment variable for the backend API URL
ARG VITE_APP_API_BASE_URL
ENV VITE_APP_API_BASE_URL=$VITE_APP_API_BASE_URL
# Build the production version of the application
RUN npm run build

# Install the serve package
RUN npm install -g serve

# Expose the container port 4173 to the outside world
EXPOSE 3000

# Start the server
CMD ["serve", "-s", "dist"]