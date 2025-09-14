const mongodb = require('../data/database');
const { ObjectId } = require('mongodb');

const allUsers = async (req, res) => {
    try {
        const result = await mongodb.getDB().collection('users').find();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createUser = async (req, res) => {
    try {
        const user = {
            username: req.body.username,
            password: req.body.password
        };
        const response = await mongodb.getDB().collection('users').insertOne(user);
        res.status(201).json(response);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const user = {
            username: req.body.username,
            password: req.body.password
        };
        const response = await mongodb.getDB().collection('users').replaceOne({ _id: userId }, user);
        if (response.modifiedCount > 0) {
            res.status(201).json(response);
        } else {
            res.status(500).json(response.error || 'Some error occurred while creating the user.');
        }

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const user = {
            username: req.body.username,
            password: req.body.password
        }
        const response = await mongodb.getDB().collection('users').deleteOne({ _id: userId });
        if (response.deletedCount > 0) {
            res.status(201).json(response);
        } else {
            res.status(500).json(response.error || 'Some error occurred while creating the user.');
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    allUsers,
    createUser,
    updateUser,
    deleteUser,

};