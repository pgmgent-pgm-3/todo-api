/**
 * Creating Authentication middleware
 */

export default (req, resp, next) => {
  const { description } = req.body.todo;
  if(description.includes('damn')) {
    resp.status(406).json({ error: "This language is not acceptable!" });
  } else {
    next();
  }
}
