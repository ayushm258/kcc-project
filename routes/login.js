var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
     res.render('login')
  });
/* GET home page. */
router.get('/getLogin', function(req, res, next) {
  console.log(req.query)
  //res.json({name:"ayush"})
  // res.render('index', { title: 'Express' });
  res.json({"Name":req.query})
});
router.post('/getLogin', function(req, res, next) {
    console.log(req.body)
    console.log(req.body.pass)
    req.json({"Name":req.body})
});
module.exports = router;

