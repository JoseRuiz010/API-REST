import bcrypt from 'bcrypt'

export const encode = async (password) => await bcrypt.hash(password, 10)
export const compare = async (passwordNew, pass) => await bcrypt.compare(passwordNew, pass)