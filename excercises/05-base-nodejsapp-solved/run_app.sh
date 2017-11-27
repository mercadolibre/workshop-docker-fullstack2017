#!/bin/bash

cd /app
if [[ "$1" == "" ]]; then
  echo "Run using start, start-dev, test"
  echo "If you are using it with your local app first, launch using install"
  exit 1
fi

if [[ "$1" == "start-dev" ]]; then
  npm run $1
else
  npm $1
fi
