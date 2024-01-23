import { UserModel } from "../models/User.model.js"

const getAll = async () => {
  const users = await UserModel.find()
  return users;
}
const get = async (id) => {
  const user = await UserModel.findById(id)
  return user;
}

const saveOrUpdate = () => 1
const del = () => 1

export const UserService = {
  getAll, get, saveOrUpdate, del
}