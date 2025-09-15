// controller/users.js
const { ObjectId } = require('mongodb');
const dbClient = require('../data/database');

async function allUsers(_req, res) {
    try {
        const users = await dbClient.getDb().collection('users').find({}).toArray();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}



async function createUser(req, res) {
    try {
        const user = { username: req.body.username, password: req.body.password };
        const result = await dbClient.getDb().collection('users').insertOne(user);
        res.status(201).json({ _id: result.insertedId, ...user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function updateUser(req, res) {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid user id to update a user.');
    }
    const id = new ObjectId(req.params.id);
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    const result = await dbClient
        .getDb()
        .collection('users')
        .replaceOne({ _id: id }, user);
    if (result.modifiedCount > 0) {
        res.status(204).end();
    } else {
        res.status(500).json(result.error || 'Some error occurred while updating the user.');
    }
}



async function deleteUser(req, res) {
    try {
        const id = new ObjectId(req.params.id);
        const r = await dbClient.getDb().collection('users').deleteOne({ _id: id });
        if (r.deletedCount === 0) return res.status(404).json({ message: 'Not found' });
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ message: 'Invalid id' });
    }
}

module.exports = {
    allUsers,
    createUser,
    updateUser,
    deleteUser
};
