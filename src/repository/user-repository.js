import User from '../models/users.js';
import CrudRepositry from './crud-repository.js';

class UserRepository extends CrudRepositry{
    constructor() {
        super(User)
    }

    async findBy(email) {
        try {
            const response = await User.findOne({email});
            return response
        } catch (error) {
            throw error;
        }
    }
};

export default UserRepository;