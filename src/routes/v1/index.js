import express from 'express';
import {createTweets} from '../../controller/tweet-controller.js';
import { toggleLike } from '../../controller/like-controllers.js';
import {createComment} from '../../controller/comment-controller.js';

const router = express.Router();

router.post('/tweets', createTweets);

router.post('/likes/toggle', toggleLike);

router.post('/comments',createComment);


export default router;

