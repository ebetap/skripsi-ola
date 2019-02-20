var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  let userName = req.body.username
  let pass = req.body.password

  if (userName === 'ola' && pass === 'skripsi'){
    res.render('login',{
      status: 'Success'
    })
  } else {
    res.render('login',{
      status: 'Failed'
    })
  }
})

module.exports = router;
