require('dotenv').config();

module.exports = {
    port: process.env.PORT,
    mongodb_url: process.env.MONGO_DB_URL,
    mode: process.env.NODE_ENV || 'production',
};