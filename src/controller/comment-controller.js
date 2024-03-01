import CommentService from "../services/comment-service.js";
const commentService = new CommentService();


export const createComment = async(req,res) => {
    try {
        const response = await commentService.createComment(
            req.query.modelId, req.query.modelType, req.user.id, req.body.content);
        console.log('hii', response)    
        return res.status(201).json({
            success: true,
            data: response,
            error: {},
            message: "successfully  created a new comment"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message:'something went wrong',
            err: error,
            data: {}
        })
    }
}