#!/bin/bash

# Get current date/time for commit message
TIMESTAMP=$(date +'%Y-%m-%d %H:%M:%S')

# Stage all changes
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
  echo "No changes to commit."
  exit 0
fi

# Commit with timestamp
git commit -m "Deploy: $TIMESTAMP"

# Push to main branch
git push origin main

echo "Deployment completed!"

