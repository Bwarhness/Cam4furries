module.exports.handleRequest = (app) => {
  

require('./media/media').handleRequest(app);
app.get('/', (req, res) => {
    res.send('root')
  })

} 