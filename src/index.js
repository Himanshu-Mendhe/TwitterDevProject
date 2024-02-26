const express = require('express');
const app = express();
const TweetRepository = require('./repository/tweet-repository')

const connect = require('./config/database');
const Tweet = require('./models/tweet'); 

app.listen (3006, async() => {
    console.log("server started")

    await connect();
    console.log("mongoose connection made");
   const tweetRepo = new TweetRepository;
   console.log(await tweetRepo.create ({content: "with hooks 1"}))
   
});