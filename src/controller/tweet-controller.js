import TweetService from "../services/tweet-service.js";
import upload from '../config/file-upload-s3-config.js';

const singleUploader = upload.single('image'); // key image is gonna get from the front end

const tweetService = new TweetService();


export const createTweets = async(req,res) => {
    try {
        singleUploader(req,res, async function(err, data){
            if(err){
                return res.status(500).json({error:err})
            }
            console.log('image url is ', req.file);
            const payload = {...req.body};
            payload.image = req.file.location;

            const response = await tweetService.create(payload);
            return res.status(201).json({
                success: true,
                data: response,
                error: {},
                message: "successfully created tweet"
            })
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