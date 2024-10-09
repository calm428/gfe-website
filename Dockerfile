FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Ensure you have git installed
RUN apk update && \
  apk add --no-cache git

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_ENVIRONMENT
# ARG NEXT_PUBLIC_METADATA_BASE
ARG NEXT_PUBLIC_WEBSOCKET_HOST

ENV NEXT_PUBLIC_ENVIRONMENT=${NEXT_PUBLIC_ENVIRONMENT}
# ENV NEXT_PUBLIC_METADATA_BASE=${NEXT_PUBLIC_METADATA_BASE}
ENV NEXT_PUBLIC_WEBSOCKET_HOST=${NEXT_PUBLIC_WEBSOCKET_HOST}

# From Dockerfile gfe-foundation
ARG NEXT_PUBLIC_WEBSITE_URL
ARG NEXT_PUBLIC_GOVERNOR_CONTRACT_ADDRESS
ARG NEXT_PUBLIC_GFE_CONTRACT_ADDRESS

ENV NEXT_PUBLIC_WEBSITE_URL=${NEXT_PUBLIC_WEBSITE_URL}
ENV NEXT_PUBLIC_GOVERNOR_CONTRACT_ADDRESS=${NEXT_PUBLIC_GOVERNOR_CONTRACT_ADDRESS}
ENV NEXT_PUBLIC_GFE_CONTRACT_ADDRESS=${NEXT_PUBLIC_GFE_CONTRACT_ADDRESS}

# From Dockerfile gfe-auth-server
ARG NEXT_PUBLIC_DEFAULT_WEBSITE_URL
ARG NEXT_PUBLIC_TERMS_URL
ARG NEXT_PUBLIC_PRIVACY_URL

ENV NEXT_PUBLIC_DEFAULT_WEBSITE_URL=${NEXT_PUBLIC_DEFAULT_WEBSITE_URL}
ENV NEXT_PUBLIC_TERMS_URL=${NEXT_PUBLIC_TERMS_URL}
ENV NEXT_PUBLIC_PRIVACY_URL=${NEXT_PUBLIC_PRIVACY_URL}

# gfe-forum
ARG NEXT_PUBLIC_AUTH_SERVER
ARG NEXT_PUBLIC_CONTRACT_ADDRESS

ENV NEXT_PUBLIC_AUTH_SERVER=${NEXT_PUBLIC_AUTH_SERVER}
ENV NEXT_PUBLIC_CONTRACT_ADDRESS=${NEXT_PUBLIC_CONTRACT_ADDRESS}

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

ENV NODE_OPTIONS=--max-old-space-size=4096 

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]