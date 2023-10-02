var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fernando' });
});

router.get('/profil', function(req, res) {
  res.render('profil',
    {nama: 'Fernando', 'npm': 2024240016}
  );
});

module.exports = router;
