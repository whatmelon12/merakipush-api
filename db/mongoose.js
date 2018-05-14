const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_MONGO_PROD);

module.exports = {mongoose};