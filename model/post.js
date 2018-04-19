const Sequelize = require('sequelize');
const sequelize = require('./db')

const Post = sequelize.define('post', {
  username: { // 應該要存 user id
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  }
}, {
  tableName: 'huli_hw10_posts'
});

Post.sync()

module.exports = Post;