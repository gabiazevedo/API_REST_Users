const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAllUsers = async () => {
  const allUsers = await connection()
    .then((db) => db.collection('users').find().toArray());
    return allUsers;
};

const findUserById = async (id) => {
  const userById = await connection()
    .then((db) => db.collection('users').findOne(new ObjectId(id)));
    return userById;
};

const createUser = async (_id, name, userName, lastAccess) => {
  const date = new Date();
  const newUser = await connection()
    .then((db) => db.collection('users').insertOne({ _id, name, userName, lastAccess: date }))
    .then((result) => ({ id: result.insertedId, name, userName, lastAccess }));
    return newUser;
};

const updateUser = async (id, { name, userName, password }) => {
  const lastAccess = new Date();
  const updateUser = await connection()
    .then((db) => {
      const userId = new ObjectId(id);
      const newData = { name, userName, password, lastAccess };

    return db.collection('users')
      .findOneAndUpdate({ _id: userId }, { $set: newData }, { returnNewDocument: true })
      .then((result) => result.value);
  });
  return updateUser;
};

const deleteUser = async (id) => {
  const deleteUser = await connection()
    .then((db) => db.collection('users').findOneAndDelete({ _id: new ObjectId(id) }));
    return deleteUser;
};

module.exports = { getAllUsers, findUserById, createUser, updateUser, deleteUser };
