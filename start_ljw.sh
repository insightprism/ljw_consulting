#!/bin/bash

# LJW Consulting Website Startup Script
# This script starts the development server for the LJW website

echo "🚀 Starting LJW Consulting Website Development Server..."
echo "================================================"

# Navigate to the website directory
cd ljw-website

# Check if node_modules exists, if not, install dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
    echo ""
fi

# Start the development server
echo "🌐 Starting server on http://localhost:12225"
echo "Press Ctrl+C to stop the server"
echo "================================================"
npm run dev