# Use an official lightweight Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy dependency files first (optimizes Docker build caching)
COPY package*.json ./

# Install dependencies (only production ones, keeping it slim)
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Run the app under a non-root user for security
USER node

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
