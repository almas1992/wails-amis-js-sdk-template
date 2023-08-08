#!/usr/bin/env bash
echo -e "Start running the script..."
cd ..
sed -i '' 's/(\?:https\?|file)/(\?:https\?|file|wails)/' frontend/src/assets/amis/sdk.js