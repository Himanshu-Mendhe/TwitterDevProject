const mongoose = require('mongoose');
const connect = async() => {
    await mongoose.connect('mongodb://localhost/twitter_dv');
}
module.exports = connect ;