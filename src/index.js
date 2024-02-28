import express from 'express';
import {connect} from './config/database.js';
const app = express();

import TweetService from './services/tweet-service.js';

app.listen(3100, async() => {
    console.log("server started on port ----3100----")
    await connect();
    console.log("mongoose connection made");

    const repo = new TweetService
    await repo.create({content: "#Code is #TEsTinG"});
})