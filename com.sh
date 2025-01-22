#!/bin/bash

if [ "$1" == "reset" ]; then
    git checkout --orphan tmp
    git add .
    git commit -m "update"
    git branch -D main
    git branch -m main
    git push -f origin main
elif [ "$1" == "update" ]; then
    git commit -am "update"
    git push
else
    echo "Usage: $0 {reset|update}"
    exit 1
fi
