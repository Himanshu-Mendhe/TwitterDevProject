import TweetService from "../services/tweet-service.js";
const tweetService = new TweetService();


export const createTweets = async(req,res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success: true,
            data: response,
            error: {},
            message: "successfully created tweet"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'something went wrong',
            err: error,
            data: {}
        })
    }
}

export const getTweets = async(req,res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success: true,
            data: response,
            error: {},
            message: "successfully fetched a  tweet"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'something went wrong',
            err: error,
            data: {}
        })
    }
}