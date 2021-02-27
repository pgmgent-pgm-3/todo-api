/**
 * Our main application
 */

import Express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Logger from './lib/Logger.js';
import registerTodoEndpoints from './actions/todo/registerTodoEndpoints.js';

// create a new express application
const app = Express();

// init dotenv
dotenv.config();

// add json body parser
app.use(bodyParser.json());

// register the endpoints
registerTodoEndpoints(app);

/**
 * Start listening on a port
 */

app.listen(process.env.PORT, () => {
  Logger.warning(`Server started on port ${process.env.PORT}`);
})