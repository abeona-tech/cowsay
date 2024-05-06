import { TwitterApi } from 'twitter-api-v2'

// Twitter API credentials
const client = new TwitterApi({
  appKey: '7JEsrkvDVxDPLC49PiPvgKnF0',
  appSecret: 'ROBhag2UN0lx99ezY1gbMl9ezkiIMftXoGmxOGE5rTDY6EjtuS',
  accessToken: '1786892620821659648-D73mNAhh70wHFGCKyNJ7RDmRWrWEFu',
  accessSecret: '1TGZdUxFR2IjOmAkjtQwuLcOmq9Z9RFhcGPgr0IOjmGYn',
})

// This is the client that can interact with the Twitter API
const rwClient = client.readWrite

// Function to upload an image and return the media ID
async function uploadMedia(filePath: string): Promise<string> {
  try {
    const mediaData = await rwClient.v1.uploadMedia(filePath, { mimeType: 'image/jpeg' })
    console.log('🚀 ~ uploadMedia ~ mediaData:', mediaData)
    return mediaData
  } catch (error) {
    console.error('Could not upload media:', error)
    throw error // Rethrow to handle in the calling function
  }
}

// Function to post a tweet
async function postTweet(message: string): Promise<void> {
  try {
    const tweet = await rwClient.v2.tweet(message)
    console.log('Tweeted:', tweet.data)
  } catch (error) {
    console.error('Could not post tweet:', error)
  }
}

// Function to post a tweet with an image
async function postTweetWithImage(message: string, imagePath: string): Promise<void> {
  try {
    const mediaId = await uploadMedia(imagePath)
    const tweet = await rwClient.v2.tweet(message, { media: { media_ids: [mediaId] } })
    console.log('Tweeted:', tweet.data)
  } catch (error) {
    console.error('Could not post tweet:', error)
  }
}

const hashtags = ['#Coding', '#Developers', '#Programming', '#DevHumor']

const hashtagString = hashtags.join(' ')

postTweetWithImage(hashtagString, './dist/quote.png')
