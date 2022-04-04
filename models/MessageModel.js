const Sequelize = require('sequelize');
const db = require('../database');
const Message = db.define(
  'message',
  {
    // attributes
    Name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    Email: {
      type: Sequelize.STRING,
      // allowNull defaults to true
      allowNull: false,
    },
    Subject: {
      type: Sequelize.STRING,
    },
    Msg: {
      type: Sequelize.STRING,
    },
  },
  {
    // options
  },
);
// Note: using `force: true` will drop the table if it already exists
Message.sync();
module.exports = Message;
