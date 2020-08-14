const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;


exports.findAll = (req, res) => {
    User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

exports.find = (req, res) => {

  User.findOne({ where: {
    username: req.body.username,
    password: req.body.password,
  }
})
  .then(data =>{
  res.send(data);
  })
  .catch(err => {
  res.status(500).send({
    message:
      err.message || "User does not exist."
  });
});
};

exports.create = (req, res) => {
// Validate req
if (!req.body.username || !req.body.email || !req.body.password) {
  res.status(400).send({
    message: "Content can not be empty!"
  });
  return;
}

// Create a user
const user = {
  username: req.body.username,
  email: req.body.email,
  password: req.body.password
};

// Save user in the database
User.create(user)
.then(data => {
  res.send(data);
})
.catch(err => {
  res.status(500).send({
    message:
      err.message || "Some error occurred while creating the user."
  });
});
};

