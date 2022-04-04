// const Pool = require('pg').Pool;
const Sequelize = require('sequelize');

const db = new Sequelize(
  'postgres://postgres:Suyesh@1408@db.aucvuoynxfkweqwtbbxs.supabase.co:6543/postgres',
);

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports=db
