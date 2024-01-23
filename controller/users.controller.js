import { UserService } from "../services/user.services.js"

const getAll = async (req, res) => {
  const users = await UserService.getAll();
  res.json(users)
}
const get = async (req, res) => {
  const id = req.params.id
  if (!id) res.send("El id es invalido -->" + id);
  const user = await UserService.get(req.params.id);
  res.json(user)
}
const getId = (req, res) => res.send('User -->' + req.params.id)

export const userController = {
  getAll, get, getId
}