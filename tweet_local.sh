#!/bin/bash

# Load secrets from 1Password
eval "$(op signin)"

# Declare variables
TWITTER_ACCESS_SECRET=""
TWITTER_ACCESS_TOKEN=""
TWITTER_APP_KEY=""
TWITTER_APP_SECRET=""

# Assign values separately
TWITTER_ACCESS_SECRET=$(op read "op://abeona/cowsay-bot/TWITTER_ACCESS_SECRET")
TWITTER_ACCESS_TOKEN=$(op read "op://abeona/cowsay-bot/TWITTER_ACCESS_TOKEN")
TWITTER_APP_KEY=$(op read "op://abeona/cowsay-bot/TWITTER_APP_KEY")
TWITTER_APP_SECRET=$(op read "op://abeona/cowsay-bot/TWITTER_APP_SECRET")

# Export the variables
export TWITTER_ACCESS_SECRET
export TWITTER_ACCESS_TOKEN
export TWITTER_APP_KEY
export TWITTER_APP_SECRET

# Run the tweet process
npm run start

# Unset the environment variables for security
unset TWITTER_ACCESS_SECRET TWITTER_ACCESS_TOKEN TWITTER_APP_KEY TWITTER_APP_SECRET
