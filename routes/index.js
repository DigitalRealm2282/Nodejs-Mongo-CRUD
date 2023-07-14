var express = require('express');
var router = express.Router();
const User = require('../models/user.js')
const control = require('../controller/user_controller.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

///save data to mongoDB
router.post('/insert' , control.insertUser)
///////////

///get Data from mongoose
router.get('/getusers',control.getUser);
//////////

///Update Data in Mongoose
router.post('/update', control.updateUser);
////////

///Delete User
router.post('/delete', control.deleteUser);
////////

module.exports = router;
