import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT,
  databaseURL: process.env.DATABASE_URI,
  brypt_salt: process.env.BCRYPT_SALT
}