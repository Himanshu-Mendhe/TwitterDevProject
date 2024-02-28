import Tweet from '../models/tweet.js';
import CrudRepositry from './crud-repository.js';

class TweetRepository extends CrudRepositry {
    constructor() {
        super(Tweet);
    }

    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet; 
        } catch (error) {
            console.log("something went wrong",error)
        }
    }

    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({path:"comments"}).lean();
            return tweet; 
        } catch (error) {
            console.log("something went wrong",error)  
        }
    }

    async getAll(offset,limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet; 
        } catch (error) {
            console.log("something went wrong",error)
        }
    }
}

export default TweetRepository;