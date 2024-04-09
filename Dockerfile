# State 1: Building the app
FROM node:18-alpine3.18 as builder

WORKDIR /app

# Copy package.json
COPY package.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn

# Copy the rest of the Next.js app source code
COPY . .

# Build the Next.js app
RUN yarn build

# State 2: Serve the app
FROM node:18-alpine3.18 as runner

WORKDIR /app

# Copy the built app from the previous stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "./server.js"]