var express = require('express');
var router = express.Router();
var app = express();

const cors = require('cors');

app.use(cors());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gestari' });
});

module.exports = router;
