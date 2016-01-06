var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var userName;
	userName= 'Jorge';
  res.render('contacto', { title: 'Museo Jesuitico San Ignacio Guazu', userName: userName });
});

module.exports = router;
