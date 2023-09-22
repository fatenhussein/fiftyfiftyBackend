const mongoose = require('mongoose');
const dotEnv = require('dotenv');
dotEnv.config({
  path: './config.env',
});

const DB = process.env.DATA_BASE.replace('<password>', process.env.PASSWORD);  
mongoose.connect(DB).then(() => console.log('Connect to db'));

const app = require('./app');
const port = 2000;

app.listen(port, () => {
  console.log('server is waiting for request... by faten hussein');
});
