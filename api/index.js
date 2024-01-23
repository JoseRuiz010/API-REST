import express from 'express';
import { readdirSync } from "fs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const route = express.Router();

const apiFolders = readdirSync('api', {
  withFileTypes: true
}).filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);
console.log(`rutas cargadas---> ${apiFolders}`)

apiFolders.forEach(async folder => {
  const routes = await import(`./${folder}/index.js`)
  route.use(`/${folder}`, routes.default)
})




export const router = route;