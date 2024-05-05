const { TwitterApi } = require('twitter-api-v2');

// Twitter API credentials
const client = new TwitterApi({
  appKey: 'YOUR_API_KEY',
  appSecret: 'YOUR_API_SECRET',
  accessToken: 'YOUR_ACCESS_TOKEN',
  accessSecret: 'YOUR_ACCESS_TOKEN_SECRET',
});

// This is the client that can interact with the Twitter API
const rwClient = client.readWrite;

// Function to post a tweet
async function postTweet(message) {
  try {
    const tweet = await rwClient.v2.tweet(message);
    console.log('Tweeted:', tweet.data);
  } catch (error) {
    console.error('Could not post tweet:', error);
  }
}

// Replace 'Hello world!' with your desired tweet message
postTweet('Hello world!');
