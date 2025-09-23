#!/bin/bash

# PhoenixDS Documentation Deployment Script
# This script builds and deploys the application to port 3001 using PM2

set -e  # Exit on any error

echo "🚀 Starting PhoenixDS Documentation deployment..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2 globally..."
    npm install -g pm2
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building the application..."
npm run build

# Stop existing PM2 process if running
echo "🛑 Stopping existing PhoenixDS process..."
pm2 stop phoenixds-docs || echo "No existing process found"

# Delete existing PM2 process
pm2 delete phoenixds-docs || echo "No existing process to delete"

# Start the application with PM2 on port 3001
echo "▶️  Starting PhoenixDS Documentation on port 3001..."
pm2 start npm --name "phoenixds-docs" -- start -- --port 3001

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Show PM2 status
echo "📊 PM2 Status:"
pm2 status

echo "✅ Deployment completed successfully!"
echo "🌐 PhoenixDS Documentation is now running on http://localhost:3001"
echo ""
echo "Useful PM2 commands:"
echo "  pm2 status              - Show process status"
echo "  pm2 logs phoenixds-docs - View logs"
echo "  pm2 restart phoenixds-docs - Restart the application"
echo "  pm2 stop phoenixds-docs - Stop the application"