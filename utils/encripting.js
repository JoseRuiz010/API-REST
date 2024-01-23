import { compare, encode } from "../libraries/Bcrypt.js";

export class PasswordEncode {
  encode = async (password) => {
    if (!password) return null;
    const encodePassowrd = await encode(password)
    console.log({ encodePassowrd })
    return encodePassowrd;
  }
  compare = async (passwordNew, passDB) => {
    if (!passwordNew && !passDB) return null;
    const isEquals = await compare(passwordNew, passDB)
    console.log({ isEquals })
    return isEquals;
  }
}