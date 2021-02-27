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
  // const todoFile = new TodoFile(process.env.TODOS_FILEPATH);
  // todoFile.save([{
  //   success: "success!"
  // }]);

  // get all the todo items
  // Logger.json(todoFile.get());

  // create a new todo
  // Logger.json(todoFile.add('Mijn nieuwe todo'));

  // update a newly added todo
  // Logger.json(todoFile.update('e62893ea-ee87-496f-9351-6fc09dc8b2e7', 'een nieuwe beschrijving.'))

  // delete a todo
  // todoFile.delete('e62893ea-ee87-496f-9351-6fc09dc8b2e7');
}

// start listening on a port
app.listen(process.env.PORT, () => {
  Logger.warning(`Server started on port ${process.env.PORT}`);
  testToDos();
})