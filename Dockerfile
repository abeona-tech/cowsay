# Use an official Node runtime as the base image
FROM node:20.12.2

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the directory /app in the container
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle the app source inside the Docker image
COPY . .

# Make port 80 available to the world outside this container
EXPOSE 80

# Run the command to start your application when the container launches
CMD [ "npm", "start" ]
