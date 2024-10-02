import { TwitterApi } from 'twitter-api-v2'

import dotenv from 'dotenv'
dotenv.config()

const client = new TwitterApi({
  appKey: process.env.TWITTER_APP_KEY || '',
  appSecret: process.env.TWITTER_APP_SECRET || '',
  accessToken: process.env.TWITTER_ACCESS_TOKEN || '',
  accessSecret: process.env.TWITTER_ACCESS_SECRET || '',
})

const rwClient = client.readWrite

async function uploadMedia(filePath: string): Promise<string> {
  try {
    const mediaData = await rwClient.v1.uploadMedia(filePath, { mimeType: 'image/jpeg' })
    return mediaData
  } catch (error) {
    console.error('Could not upload media:', error)
    throw error
  }
}

async function postTweetWithImage(message: string, imagePath: string): Promise<void> {
  try {
    const mediaId = await uploadMedia(imagePath)
    const tweet = await rwClient.v2.tweet(message, { media: { media_ids: [mediaId] } })
    console.log('Tweet posted:', tweet)
  } catch (error) {
    console.error('Could not post tweet:', error)
  }
}

const hashtags = ['#tech', '#dev', '#coding', '#memes', '#jokes', '#developers', '#devjokes', '#codinglife']

const hashtagString = hashtags.join(' ')

postTweetWithImage(hashtagString, './dist/cowsay-quote.png')
