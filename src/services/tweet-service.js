import {TweetRepository, HashtagRepository} from '../repository/index.js';

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository()
        this.hashtagRepository = new HashtagRepository()
    }

    async create(data) {
        console.log(data)
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g)
                    .map((tag) => tag.substring(1).toLowerCase())//regex to pull out the hashtaged part // we lower it here bcoz we cant use hooks since then capital tags will not get searched in db
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresentTags = alreadyPresentTags.map((tags) => tags.title)
        let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
        newTags = newTags.map(tag => {
            return {title: tag, tweets: [tweet.id]}
        });
        await this.hashtagRepository.bulkCreate(newTags); 
        alreadyPresentTags.forEach((tag) => {
           tag.tweets.push(tweet.id);
           tag.save();
        })
        
        return tweet;
    }

    async get(tweetId) {
        const response = await this.tweetRepository.getWithComments(tweetId);
        return response;
    }
};

export default TweetService