var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
  //console.log(req)
  //res.json({name:"ayush"})
  // res.render('index', { title: 'Express' });
});

module.exports = router;
 