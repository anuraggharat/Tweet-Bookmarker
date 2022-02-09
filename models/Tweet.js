const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema({
  tweetid: {
    type: String,
  },
  category: {
    type: String,
  },
});

module.exports = mongoose.models.Tweet || mongoose.model("Tweet",TweetSchema)