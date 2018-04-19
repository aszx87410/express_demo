const Sequelize = require('sequelize');
const sequelize = require('./db')

const User = sequelize.define('user', {
  nickname: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  password: { // 不要存明碼
    type: Sequelize.STRING
  }
}, {
  tableName: 'huli_hw10_users'
});

User.sync()

module.exports = User;