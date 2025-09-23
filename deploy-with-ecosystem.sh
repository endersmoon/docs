#!/bin/bash

# PhoenixDS Documentation Deployment Script with PM2 Ecosystem
# This script builds and deploys using the ecosystem.config.js file

set -e  # Exit on any error

echo "🚀 Starting PhoenixDS Documentation deployment with ecosystem config..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2 globally..."
    npm install -g pm2
fi

# Create logs directory
echo "📁 Creating logs directory..."
mkdir -p logs

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building the application..."
npm run build

# Stop and delete existing PM2 process
echo "🛑 Stopping existing processes..."
pm2 delete ecosystem.config.js || echo "No existing processes found"

# Start the application using ecosystem file
echo "▶️  Starting PhoenixDS Documentation using ecosystem config..."
pm2 start ecosystem.config.js

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
echo "  pm2 monit              - Monitor processes"