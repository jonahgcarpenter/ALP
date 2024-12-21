# frontend/Dockerfile

FROM node:18 AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the static files
RUN npm run build

# Output: ./dist directory
