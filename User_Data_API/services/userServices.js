 const userModel = require('../models/userModel');

const formatUser = ({ _id, name, userName, lastAccess }) => {
  return {
    id: _id, 
    name,
    userName,
    lastAccess
  };
};

const getAllUsers = async () => {
  const allUsers = await userModel.getAllUsers();
  return allUsers.map(formatUser);
}

const findUserById = async (id) => {
  const findedUser = await userModel.findUserById(id);
  return formatUser(findedUser);
};

const createUser = async (_id, name, userName, lastAccess, password) => {
  const createdUser = await userModel.createUser(_id, name, userName, lastAccess, password);
  return formatUser(createdUser);
};

const updateUser = async (id, { name, userName }) => {
  const updatedUser = await userModel.updateUser(id, { name, userName });
  return formatUser(updatedUser);
};

const deleteUser = async (id) => {
  const deletedUser = await userModel.deleteUser(id);
  return deletedUser;
};

module.exports = { getAllUsers, findUserById, createUser, updateUser, deleteUser };
