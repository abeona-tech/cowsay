import { TwitterApi } from 'twitter-api-v2'

import dotenv from 'dotenv'
dotenv.config()

// Twitter API credentials
const client = new TwitterApi({
  appKey: process.env.TWITTER_APP_KEY,
  appSecret: process.env.TWITTER_APP_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
})

// This is the client that can interact with the Twitter API
const rwClient = client.readWrite

// Function to upload an image and return the media ID
async function uploadMedia(filePath: string): Promise<string> {
  try {
    const mediaData = await rwClient.v1.uploadMedia(filePath, { mimeType: 'image/jpeg' })
    return mediaData
  } catch (error) {
    console.error('Could not upload media:', error)
    throw error // Rethrow to handle in the calling function
  }
}

// Function to post a tweet with an image
async function postTweetWithImage(message: string, imagePath: string): Promise<void> {
  // only if .env TWEET is true
  if (process.env.TWEET !== 'true') {
    console.log('Tweeting is disabled')
    return
  }
  try {
    const mediaId = await uploadMedia(imagePath)
    const tweet = await rwClient.v2.tweet(message, { media: { media_ids: [mediaId] } })
  } catch (error) {
    console.error('Could not post tweet:', error)
  }
}

const hashtags = [
  '#tech',
  '#dev',
  '#memes',
  '#coding',
  '#developer',
  '#devjokes',
  '#devmemes',
  '#devhumor',
  '#codingjokes',
  '#codinglife',
]

const hashtagString = hashtags.join(' ')

postTweetWithImage(hashtagString, './dist/cowsay-quote.png')
