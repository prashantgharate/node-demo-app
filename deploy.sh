#!/bin/bash

# Stop previous app
pkill -f "node index.js"

# Navigate to app folder
cd /home/ubuntu/node-demo-app

# Install dependencies
npm install

# Start app in background
nohup node index.js > output.log 2>&1 &

