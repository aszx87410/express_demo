const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')

const app = express()


const userModel = require('./model/user')
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
app.set('view engine', 'ejs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userController = require('./controller/user')
const postController = require('./controller/post')

app.get('/', userController.index)
app.get('/login', userController.login) // render login page
app.post('/login', userController.handleLogin)
app.get('/register', userController.register) // render register page
app.post('/register', userController.handleRegister)

app.get('/new_post', postController.new)
app.post('/posts', postController.create)

app.get('/logout', userController.logout)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})