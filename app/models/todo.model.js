module.exports = (sequelize, Sequelize) => {
  const todo = sequelize.define("todo", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return todo;
};
