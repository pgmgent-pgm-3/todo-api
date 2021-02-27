/**
 * All the CRUD endpoint actions together
 */

import parseTodo from './parseTodo.js';

/**
 * Getting the todos
 *
 * @param {*} todo
 * @param {*} request
 * @param {*} response
 */
export const getTodos = (todo, request, response) => {
  try {
    response.status(200).json({ todos: todo.get() });
  } catch({ message }) {
    response.status(500);
    response.json({ error: message });
  }
};

/**
 * Creates a new todo item
 *
 * @param {*} todo
 * @param {*} request
 * @param {*} response
 */
export const addTodo = (todo, request, response) => {
  try {
    const { description } = parseTodo(request, response);
    const newTodo = todo.add(description);
    response.status(201).json({ todo: newTodo });
  } catch({ message }) {
    response.status(500).json({ error: message });
  }
};

/**
 * Update a new todo item
 *
 * @param {*} todo
 * @param {*} request
 * @param {*} response
 */
export const updateTodo = (todo, request, response) => {
  try {
    const { description } = parseTodo(request);
    const id = request.params.id;
    const updatedTodo = todo.update(id, description);
    response.status(200).json({ todo: updatedTodo });
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }
};

/**
 * Delete a todo item
 *
 * @param {*} todo
 * @param {*} request
 * @param {*} response
 */
export const deleteTodo = (todo, request, response) => {
  try {
    const id = request.params.id;
    todo.delete(id);
    response.status(204).end();
  }
  catch({ message }) {
    response.status(500).json({ error: message });
  }
};

