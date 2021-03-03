// const event = require('events');
// const fs = require('fs').promises;
// const eventEmitter = new event.EventEmitter();

// eventEmitter.on('lunch', () => {
//   console.log('eat!');
// });
// console.log('start!');
// eventEmitter.emit('lunch');
// console.log('end!');
// const file = async () => {
//   const data = await fs.readFile('./hello.txt', 'utf-8');
//   console.log(data);
// };
// file();
import express from 'express';
import fs from 'fs/promises';
import { readFile } from 'node:fs/promises';
const app = express();
app.get('/', async (_, res) => {
  try {
    const data = await fs.readFile('./public/index.html', 'utf-8');
    res.send(data);
  } catch (error) {
    if (error) res.status(500).send('Sorry, something was wrong 😰 !');
  }
});
app.use(async (req, res) => {
  try {
    const data = await fs.readFile('./public/404.html', 'utf-8');
    res.send(data);
  } catch (error) {
    if (error) res.status(500).send('Sorry, something was wrong 😰 !');
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server listen on port ', PORT);
});
