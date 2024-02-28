import Hashtag from '../models/hashtags.js'

class HashtagRepository {
    async create(data) {
        try {
            const hashtag = await Hashtag.create(data);
            return hashtag; 
        } catch (error) {
            console.log("something went wrong",error)
        }
    }

    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log("something went wrong", error) 
        }
    }

    async get(id) {
        try {
            const hashtag = await Hashtag.findById(id);
            return hashtag; 
        } catch (error) {
            console.log("something went wrong",error)
        } 
    }
    async getWithComments(id) {
        try {
            const hashtag = await Hashtag.findById(id).populate({path:"comments"}).lean();
            return hashtag; 
        } catch (error) {
            console.log("something went wrong",error)  
        }
    };

    async destroy(id) {
        try {
            const hashtag = await Hashtag.findByIdAndDelete(id);
            return hashtag; 
        } catch (error) {
            console.log("something went wrong",error)
        }
    };

    async findByName(titleList) {
        try {
            const tags = await Hashtag.find({
                title: titleList
            })
            return tags;
        } catch (error) {
            console.log("something went wrong")
        }
    };
}

export default HashtagRepository;