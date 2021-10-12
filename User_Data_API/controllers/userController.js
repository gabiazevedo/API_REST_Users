const Joi = require('joi');
const rescue = require('express-rescue');
const userServices = require('../services/userServices');

const getAllUsers = rescue(async (_req, res) => {
  const allUsers = await userServices.getAllUsers();
  res.status(200).json(allUsers);
});

const findUser = rescue( async (req, res, next) => {
  const { id } = req.params;
  const userById = await userServices.findUserById(id);
  if (userById.error) return next(userById.error);
  res.status(200).json(userById);
});

const createUser = rescue(async (req, res, next) => {
  const { error } = Joi.object({
    name: Joi.string().min(3).not().empty().required(),
    userName: Joi.string().min(5).not().empty().required(),
    password: Joi.string().min(6).required(),
  }).validate(req.body);

  if (error) return next(error);

  const { _id, name, userName, lastAccess, password } = req.body;

  const newUser = await userServices.createUser(_id, name, userName, lastAccess, password);

  if (newUser.error) return next(newUser.error);

  res.status(201).json(newUser);
});

const updateUser = rescue(async (req, res, next) => {
  const { id } = req.params;
  const { name, userName } = req.body;
  const userUpdated = await userServices.updateUser(id, { name, userName });

  if (userUpdated.error) return next(userUpdated.error);

  res.status(200).json(userUpdated);
});

const deleteUser = rescue(async (req, res) => {
  const { id } = req.params;
  const deletedUser = await userServices.deleteUser(id);
  
  res.status(200).json(deletedUser);
});

module.exports = { getAllUsers, findUser, createUser, updateUser, deleteUser };