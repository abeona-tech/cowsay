# Use the official Ubuntu image as the base
FROM ubuntu:latest

# Update the system and install necessary packages
RUN apt-get update && apt-get install -y cowsay fortune lolcat imagemagick

# Set the default command for the container
CMD /usr/games/fortune | /usr/games/cowsay | /usr/games/lolcat | /usr/games/imagemagick
