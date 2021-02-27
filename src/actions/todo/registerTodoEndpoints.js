/**
 * Registering the ToDo API endpoints
 */

import TodoFile from '../../lib/TodoFile.js';
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
} from './crudTodo.js';

export default (app) => {
  // create a ToDo file to work with
  const todoFile = new TodoFile(process.env.TODOS_FILEPATH);

  // get the todos
  app.get('/todos', (req, res) => getTodos(todoFile, req, res));

  // add a todo
  app.post('/todos', (req, res) => addTodo(todoFile, req, res));

  // update a todo
  app.put('/todos/:id', (req, res) => updateTodo(todoFile, req, res));

  // delete a todo
  app.delete('/todos/:id', (req, res) => deleteTodo(todoFile, req, res));
}