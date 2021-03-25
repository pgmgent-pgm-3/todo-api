/**
 * Our main application
 */

import Express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Logger from "./lib/Logger.js";
import authenticate from "./actions/auth/index.js";
import registerTodoEndpoints from "./actions/todo/registerTodoEndpoints.js";
import middleware from "./middleware/index.js";

// create a new express application
const app = Express();

// init dotenv
dotenv.config();
const NODE_ENV = process.env.NODE_ENV || "development";

// add json body parser
app.use(bodyParser.json());

// register todo endpoints with middleware
app.use("/todos", ...middleware, registerTodoEndpoints);

// register auth endpoints
app.use("/auth", authenticate);

if (NODE_ENV !== "test") {
  /**
   * Start listening on a port
   */

  app.listen(process.env.PORT, () => {
    Logger.warning(`Server started on port ${process.env.PORT}`);
  });
}

export { app };
