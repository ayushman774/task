const user = require('../dal/index');
const ObjectId = require('mongodb').ObjectId;

const save = async({username, contact, email, password}) => {
    const result = await user.insertMany({username, contact, email, password});
    return result.ops[0]};

const getAll = async () => {
    const cursor = await user.find();
    return cursor.toArray();
}

const getById = async (id) => {
    return await user.findOne({_id:ObjectId(id)});
}

const update = async (id, {username, contact, email, password}) => {
    const result = await user.findOneAndUpdate({_id:ObjectId(id)}, {username, contact, email, password})
    return result.ops[0];
}

const removeById = async id => {
    await user.deleteOne({_id:ObjectId(id)});
}

module.exports = {getAll, getById, removeById, save, update}
