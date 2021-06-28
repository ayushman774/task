const users = require('./index').db('store').collection('users');
const ObjectId = require('mongodb').ObjectId;

const save = async({firstName, lastName, contact, email, password}) => {
    const result = await users.insertOne({firstName, lastName, contact, email, password});
    return result.ops[0];
}

const getAll = async () => {
    const cursor = await users.find();
    return cursor.toArray();
}

const getById = async (id) => {
    return await users.findOne({_id:ObjectId(id)});
}

const update = async (id, {firstName, lastName, contact, email, password}) => {
    const result = await users.replaceOne({_id:ObjectId(id)}, {firstName, lastName, contact, email, password})
    return result.ops[0];
}

const removeById = async id => {
    await users.deleteOne({_id:ObjectId(id)});
}

module.exports = {getAll, getById, removeById, save, update}
