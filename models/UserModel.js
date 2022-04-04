const Sequelize = require('sequelize');
const db = require('../database');
const User = db.define(
  'user',
  {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    lastName: {
      type: Sequelize.STRING,
      // allowNull defaults to true
    },
  },
  {
    // options
  },
);
// Note: using `force: true` will drop the table if it already exists
// User.sync({ force: true });
User.sync();
module.exports = User;
