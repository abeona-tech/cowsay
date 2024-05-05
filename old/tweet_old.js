const { TwitterApi } = require('twitter-api-v2');

// Twitter API credentials
const client = new TwitterApi({
  appKey: '7JEsrkvDVxDPLC49PiPvgKnF0',
  appSecret: 'ROBhag2UN0lx99ezY1gbMl9ezkiIMftXoGmxOGE5rTDY6EjtuS',
  accessToken: '1786892620821659648-D73mNAhh70wHFGCKyNJ7RDmRWrWEFu',
  accessSecret: '1TGZdUxFR2IjOmAkjtQwuLcOmq9Z9RFhcGPgr0IOjmGYn',
});

// This is the client that can interact with the Twitter API
const rwClient = client.readWrite;

// Function to post a tweet
async function postTweet(message) {
  try {
    // const tweet = await rwClient.v2.tweet(message);
    // console.log('Tweeted:', tweet.data);
    console.log('Tweeted');
  } catch (error) {
    console.error('Could not post tweet:', error);
  }
}

// Replace 'Hello world!' with your desired tweet message
postTweet('Hello world!');


// Bearer Token
// AAAAAAAAAAAAAAAAAAAAADugtgEAAAAAtJ1Teq%2F9UCC%2BsRoKaLnG9mAsFZo%3Dwv3yFdmrlbLvwtUCEzPDtIf76h6INWFM88osFmCwXxBVrDGKUw

// oauth2 client id
// UjZMaDZHM0xPSm9nU1M3Wl93NlA6MTpjaQ

// oauth2 client secret
// 7vZ9AF0CpRPtJqDOkiK9Am6YMiufwEBRUeuM_qNJaOXY8emeEc
