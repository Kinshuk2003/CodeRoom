FROM ubuntu:20.04
# setup user
RUN useradd -ms /bin/bash sandbox

# setup the working directory
WORKDIR /home/sandbox

# update the package list
RUN apt update && apt upgrade -y

# Install nano and curl
RUN apt install nano curl -y

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && apt-get install -y nodejs

# configuring terminal to display current working directory
RUN echo "PS1='\w '" >> /home/sandbox/.bashrc

# Setup final working directory
WORKDIR /home/sandbox/app