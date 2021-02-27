/**
 * Our main application
 */

import Express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Logger from './lib/Logger.js';

import TodoFile from './lib/TodoFile.js';

// create a new express application
const app = Express();

// init dotenv
dotenv.config();

// add json body parser
app.use(bodyParser.json());

// a test function, for testing only
const testToDos = () => {
  const todoFile = new TodoFile(process.env.TODOS_FILEPATH);
  todoFile.save([{
    success: "success!"
  }]);
}

// start listening on a port
app.listen(process.env.PORT, () => {
  Logger.warning(`Server started on port ${process.env.PORT}`);
  testToDos();
})