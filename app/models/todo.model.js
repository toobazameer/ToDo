module.exports = (sequelize, Sequelize) => {
  const todo = sequelize.define("todo", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    author: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN
    }
  });

  return todo;
};
