import express from 'express';
import {createTweets} from '../../controller/tweet-controller.js';
import { toggleLike } from '../../controller/like-controllers.js';

const router = express.Router();

router.post('/tweets', createTweets);
router.post('/likes/toggle', toggleLike);
export default router;

