var express = require('express');
var router = express.Router();
var cors = require('cors')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/whoami', (req, res)=>{
  const ipaddress = req.headers.host
  const language = req.headers["accept-language"]
  const software = req.headers['user-agent']
  res.json({
    ipaddress,
    language,
    software
  })
})


module.exports = router;
