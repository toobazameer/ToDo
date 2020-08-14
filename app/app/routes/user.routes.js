module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    router.get("/", user.findAll);
  
    router.post("/", user.find);

    router.post("/register", user.create);

    app.use('/api/user', router);
  };
  