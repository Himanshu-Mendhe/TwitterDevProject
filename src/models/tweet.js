import mongoose from "mongoose";
const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet cannot be more than 250 characters']
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],// for comment on a comment system
    image: { 
        type:String
    }
}, {timestamps: true});

const Tweet = mongoose.model('Tweet', tweetSchema);
export default Tweet;

// when new tweet is adde with a hashtag then we can not update the tweet and the hashtag as well; we can just delete it.