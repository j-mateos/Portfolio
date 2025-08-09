# Stage 1: Build
FROM node:22 AS build
WORKDIR /app

# Copy configuration files, dependencies, and other code
COPY package*.json ./
RUN npm install
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine AS serve

# Copy built files
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port for web access
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
