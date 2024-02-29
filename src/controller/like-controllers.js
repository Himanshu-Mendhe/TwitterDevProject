import LikeService from '../services/like-service.js';
const likeSerice = new LikeService();


export const toggleLike = async(req,res) => {
    try {
        const response = await likeSerice.toggleLike(
             req.query.modelId, req.query.modelType, req.body.userId);
        return res.status(201).json({
            success: true,
            data: response,
            error: {},
            message: "successfully toggled like"
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