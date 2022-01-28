#!/usr/bin/bash

# Usage:
# 1. ls -> list information
#   writing -> All info related to writing

if [[ $1 == "ls" ]]
then
  if [[ $2 == "writing" ]]
  then
    git branch -a | grep w-
  fi
fi