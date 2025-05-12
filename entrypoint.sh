#!/bin/bash

set -e

echo "Migrating Database.."
npx prisma migrate deploy

echo "Starting application..."
npm start