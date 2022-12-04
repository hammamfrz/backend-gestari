var express = require('express');
var router = express.Router();
var app = express();

const cors = require('cors');

app.use(cors({
  origin: "http://localhost:3000",
}));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = router;
