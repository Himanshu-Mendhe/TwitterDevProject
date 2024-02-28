import Like from '../models/likes.js';
import CrudRepositry from './crud-repository.js';

class LikeRepository extends CrudRepositry{
    constructor(){
        super(Like);
    }
}
export default LikeRepository;