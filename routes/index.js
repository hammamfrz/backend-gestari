var express = require('express');
var router = express.Router();
var app = express();

const cors = require('cors');

app.use(cors({
  origin: "https://hammerhead-app-zfi4g.ondigitalocean.app",
}));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = router;
