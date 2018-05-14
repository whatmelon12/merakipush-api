var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_MONGO_DEV);

module.exports = {mongoose};