import express from 'express';
import {connect} from './config/database.js';
import bodyParser from 'body-parser';
import apiRoutes from './routes/index.js';
const app = express();

import {UserRepository, TweetRepository} from './repository/index.js';
import LikeService from './services/like-service.js';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api', apiRoutes);



app.listen(3100, async() => {
    console.log("server started on port ----3100----")
    await connect();
    console.log("mongoose connection made");

    const userRepo = new UserRepository();
    const tweetRepo = new TweetRepository();
    const tweets = await tweetRepo.getAll(0,10);

    const users = await userRepo.getAll()
    
    const likeService = new LikeService();
    await likeService.toggleLike(tweets[1].id, 'Tweet', users[0].id);

})