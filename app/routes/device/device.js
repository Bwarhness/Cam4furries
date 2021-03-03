module.exports.handleRequest = app => {

  
  app.get('/device', (req, res) => {
    res.send('alldevices');
  });
  app.get('/device/user/:userid', (req, res) => {
    res.send('device belonging to user');
  });
  
  app.get('/device/area/:areaid', (req, res) => {
    res.send('device');
  });
};



var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})
module.exports = router