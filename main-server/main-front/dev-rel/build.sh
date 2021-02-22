#!/usr/bin/bash

if [ $1 = "deploy" ]
then
    npm --prefix ../ run build
    echo "BUILD COMPLETE :D"
    # Deploy to server
fi

# run build
# Upload build directory to server
# Send signal for the server to restart