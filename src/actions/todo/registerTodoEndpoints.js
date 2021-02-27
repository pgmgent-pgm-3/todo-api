/**
 * Registering the ToDo API endpoints
 */

// import TodoFile from '../../lib/TodoFile.js';
import TodoDb from '../../lib/TodoDb.js';
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from './crudTodo.js';

export default (app) => {
  // create a ToDo file to work with
  // const todoData = new TodoFile(process.env.TODOS_FILEPATH);
  const todoData = new TodoDb();

  // get the todos
  app.get('/todos', async (req, res) => { await getTodos(todoData, req, res); });

  // add a todo
  app.post('/todos', async (req, res) => { await addTodo(todoData, req, res); });

  // update a todo
  app.put('/todos/:id', async (req, res) => { await updateTodo(todoData, req, res); });

  // delete a todo
  app.delete('/todos/:id', async (req, res) => { await deleteTodo(todoData, req, res); });
};
