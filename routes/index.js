var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Museo Jesuitico San Ignacio Guazu', userName: 'Jorge' });
});

module.exports = router;
