const Post = require('../model/post')

module.exports = {
  new: function(req, res){
    const username = req.session.username
    res.render('new_post', {
      username,
      title: 'New post'
    });
  },

  create: (req, res) => {
    Post.create({
      username: req.body.username,
      title: req.body.title,
      content: req.body.content
    }).then(() => {
      res.redirect('/')
    }).catch((err) => {
      console.log(err)
    })
  }
}