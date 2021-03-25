import TodoDb from "../src/lib/TodoDb.js";
import request from "supertest";
import { app } from "../src/index.js";

const todoData = new TodoDb();

describe("Database tests", () => {
  it("should return an array of at least 4 todos", async () => {
    const todos = await todoData.get();
    expect(Array.isArray(todos)).toBe(true);
    expect(todos.length).toBeGreaterThanOrEqual(4);
  });
});

describe("App endpoints", () => {
  let token = "";

  it("should give me an access token", async (done) => {
    const res = await request(app)
      .post("/auth/login")
      .send({
        username: "fred",
        password: "12345",
      })
      .set("Accept", "application/json");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("token");
    token = res.body.token;
    done();
  });

  it("should give me todos", async (done) => {
    const res = await request(app)
      .get("/todos/")
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + token);
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("todos");
    expect(Array.isArray(res.body.todos)).toBe(true);
    done();
  });
});
