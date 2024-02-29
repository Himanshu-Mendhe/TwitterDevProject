import Like from '../models/likes.js';
import CrudRepositry from './crud-repository.js';

class LikeRepository extends CrudRepositry{
    constructor(){
        super(Like);
    }

    async findByUserAndLikeable(data) {
        try {
            const like = await Like.findOne(data);
            return like;
        } catch (error) {
            throw error;
        }
    }
}
export default LikeRepository;
 