# syntax=docker/dockerfile:1

# ============================================================
# 1. Dependencies
# ============================================================

FROM node:20-alpine AS deps

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && \
    corepack prepare pnpm@12.5.1 --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./

RUN pnpm install --frozen-lockfile


# ============================================================
# 2. Builder
# ============================================================

FROM node:20-alpine AS builder

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NEXT_TELEMETRY_DISABLED=1

RUN corepack enable && \
    corepack prepare pnpm@12.5.1 --activate

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN pnpm run build


# ============================================================
# 3. Production Runner
# ============================================================

FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs


# ============================================================
# Next.js standalone output
# ============================================================

COPY --from=builder \
    --chown=nextjs:nodejs \
    /app/public ./public

COPY --from=builder \
    --chown=nextjs:nodejs \
    /app/.next/standalone ./

COPY --from=builder \
    --chown=nextjs:nodejs \
    /app/.next/static ./.next/static


# ============================================================
# Runtime
# ============================================================

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
