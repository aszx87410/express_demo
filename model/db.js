const Sequelize = require('sequelize');
const settings = require('./settings')

const sequelize = new Sequelize('mentor_program_db', 'huli', settings.password, {
  host: '166.62.28.131',
  dialect: 'mysql'
});

// Promise
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize