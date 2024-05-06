# Use the specified Node.js runtime as the base image
FROM node:20.12.2

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the tsconfig and src directories to the working directory
COPY tsconfig.json ./
COPY src ./src

# Create the dist directory
RUN mkdir -p ./dist

# Install zsh
RUN apt-get update && apt-get install -y zsh

# Install Ruby and lolcat
RUN apt-get install -y ruby && gem install lolcat

# Change the default shell to zsh
SHELL ["/bin/zsh", "-c"]

# Define the command to run the application
CMD npm run start
