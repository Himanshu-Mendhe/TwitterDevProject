import express from 'express';
import {createTweets} from '../../controller/tweet-controller.js'

const router = express.Router();

router.post('/tweets', createTweets);
export default router;

