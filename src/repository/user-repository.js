import User from '../models/users.js';
import CrudRepositry from './crud-repository.js';

class UserRepository extends CrudRepositry{
    constructor() {
        super(User)
    }
};

export default UserRepository;