const Tweet = require('../models/tweet');

class TweetRepository {
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet; 
        } catch (error) {
            console.log("something went wrong")
        }
    }

    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet; 
        } catch (error) {
            console.log("something went wrong")
        } 
    }

    async update(id, data) {
        try {
            const tweet = await Tweet.findByIdAndUpdate(id, data, {new:true});
            return tweet; 
        } catch (error) {
            console.log("something went wrong")
        }
    }

    async destroy(id) {
        try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet; 
        } catch (error) {
            console.log("something went wrong")
        }
    }

    //pagination
    async getAll(offset,limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet; 
        } catch (error) {
            console.log("something went wrong")
        }
    }
}

module.exports = TweetRepository;