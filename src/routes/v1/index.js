import express from 'express';
import {createTweets, getTweets} from '../../controller/tweet-controller.js';
import { toggleLike } from '../../controller/like-controllers.js';
import {createComment} from '../../controller/comment-controller.js';
import { login, signup } from '../../controller/auth-controller.js';
import {authenticate} from '../../middlewares/authenticate.js'

const router = express.Router();

router.post('/tweets', authenticate, createTweets);
router.get('/tweets/:id', getTweets)

router.post('/likes/toggle', toggleLike);

router.post('/comments', authenticate, createComment);

router.post('/signup', signup);

router.post('/login', login);


export default router;

