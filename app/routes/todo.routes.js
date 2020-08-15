module.exports = app => {
  const todos = require("../controllers/todo.controller.js");

  var router = require("express").Router();

  // Create a new todo
  router.post("/", todos.create);

  // Retrieve all todos
  router.get("/", todos.findAll);

  // Retrieve all status todos
  router.get("/status", todos.findAllstatus);

  // Retrieve a single todo with id
  router.get("/:id", todos.findOne);

  // Update a todo with id
  router.put("/:id", todos.update);

  // Delete a todo with id
  router.delete("/:id", todos.delete);

  // Delete all todos
  router.delete("/", todos.deleteAll);

  app.use('/api/todos', router);
};
