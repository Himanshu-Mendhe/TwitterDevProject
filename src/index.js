const express = require('express');
const app = express();
const TweetRepository = require('./repository/tweet-repository')

const connect = require('./config/database');
const Tweet = require('./models/tweet'); 
const Comment = require('./models/comments');

app.listen (3100, async() => {
    console.log("server started")
    await connect();
    console.log("mongoose connection made");
   
});