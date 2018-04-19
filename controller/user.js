const User = require('../model/user')
const Post = require('../model/post')

module.exports = {
  index: function(req, res){
    const username = req.session.username
    if (username) {
      Post.findAll().then(posts => {
        res.render('index', {
          username,
          posts,
          title: 'My posts'
        });
      }).catch(err => {
        console.log(err)
      })
    } else {
      res.render('index', {
        username,
        posts: [],
        title: 'Home'
      });
    }
  },

  login: (req, res) => {
    const username = req.session.username
    res.render('login', {
      username,
      title: 'Login'
    })
  },

  handleLogin: (req, res) => {
    User.find({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    }).then(data => {
      if (data) {
        req.session.username = req.body.username
        req.session.nickname = data.nickname
        res.redirect('/')
      } else {
        res.redirect('/login')
      }      
    }).catch((err) => {
      res.redirect('/login')
    })
  },

  register: (req, res) => {
    const username = req.session.username
    res.render('register', {
      username,
      title: 'Register'
    })
  },

  handleRegister: (req, res) => {
    User.create({
      nickname: req.body.nickname,
      username: req.body.username,
      password: req.body.password
    }).then(() => {
      req.session.username = req.body.username
      req.session.nickname = req.body.nickname
      res.redirect('/')
    }).catch((err) => {
      console.log(err)
    })
  },

  logout: (req, res) => {
    req.session.destroy()
    res.redirect('/')
  }
}