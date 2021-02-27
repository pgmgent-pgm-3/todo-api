/**
 * Writing to a ToDo JSON file
 */

import fs from 'fs';
import Logger from './Logger.js'

export default class TodoFile {
  constructor(filename) {
    this.filename = filename;
  }

  /**
   * Save a todo array
   *
   * @param {array} todos
   */
  save(todos) {
    try {
      fs.writeFileSync(this.filename, JSON.stringify(todos, null, 2));
    } catch(e) {
      Logger.error(e.message);
    }
  }
}