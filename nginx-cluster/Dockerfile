# Stage 1: Build
FROM node:latest AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Stage 2: Run
FROM node:latest
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --production --legacy-peer-deps

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "dist/main.js"]
