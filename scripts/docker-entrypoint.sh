#!/bin/sh

# Docker entrypoint script for Crowe Logic Platform
set -e

echo "Starting Crowe Logic Platform..."

# Wait for database to be ready
until pg_isready -h "${DB_HOST:-localhost}" -p "${DB_PORT:-5432}" -U "${DB_USER:-crowe}" -d "${DB_NAME:-crowe_platform}"; do
  echo "Waiting for database..."
  sleep 2
done

echo "Database is ready!"

# Run database migrations
echo "Running database migrations..."
npx prisma migrate deploy

# Start the application
echo "Starting Next.js server..."
exec node server.js
