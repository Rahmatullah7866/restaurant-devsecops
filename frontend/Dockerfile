FROM node:22-slim

WORKDIR /app

# Install dependencies first (caching layer)
COPY package.json package-lock.json* ./
RUN npm install

# Copy project files
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]