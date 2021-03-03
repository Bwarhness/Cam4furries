var Datastore = require('nedb'),
  db = new Datastore({
    filename: require('path').resolve('./') + '/app/database.db',
    autoload: true,
  });
module.exports.handleRequest = app => {
  app.get('/api/media', (req, res) => {
    db.find({ }, function (err, docs) {
        res.send(docs);
      });
  });
  
  app.get('/api/media/:id', (req, res) => {
    db.find({_id: req.params.id }, function (err, docs) {
        res.send(docs);
      });
  });
  app.get('/api/media/device/:deviceId', (req, res) => {
    db.find({deviceId: req.params.deviceId }, function (err, docs) {
        res.send(docs);
      });
  });
  app.post('/api/media', (req, res) => {
    let data = req.body;
    saveMedia(req.body);
    res.send('root');
  });
};
function saveMedia(media) {
  require('fs').writeFile(
    require('path').resolve('./') + '/media/' + media.id + '.png',
    media.base64,
    'base64',
    function(err) {
      if (!!err) {
        return false;
      } else {
          delete media.base64;
            db.insert(media, function(err, media) {
                return media;
        });
      }
    },
  );
}
