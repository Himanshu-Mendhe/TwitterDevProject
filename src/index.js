import express from 'express';
import {connect} from './config/database.js';
const app = express();

import HashtagRepository from './repository/hashtag-repository.js';
import TweetService from './services/tweet-service.js';

app.listen(3100, async() => {
    console.log("server started on port ----3100----")
    await connect();
    console.log("mongoose connection made");
})