const dotenv = require('dotenv');
dotenv.config();

const mongodb = require('mongodb').MongoClient;

let database;

const initDB = (callback) => {
    if (database) {
        console.log('Database is already initialized!');
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGOBD_URL)
        .then((client) => {
            database = client.db();
            callback(null, database);
        })
        .catch((err) => {
            callback(err);
        });
};

const getDB = () => {
    if (!database) {
        throw new Error('Database not initialized');
    }
    return database;
};

module.exports = {
    initDB,
    getDB,
};