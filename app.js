const express = require('express')
app = express()
port = process.env.PORT || 3000

mongoose = require('mongoose')
const uri = "mongodb+srv://simon:YAw9UdgXVyRe6pmd@cluster0.9achw.mongodb.net/colinAndEmma?retryWrites=true&w=majority";

Item = require('./api/models/item')
Contribution = require('./api/models/contribution')
// mongoose instance connection url connection
mongoose.connect(uri, {
 useNewUrlParser: true,
 useCreateIndex: true,
 useUnifiedTopology: true
 }).then(res => {
  console.log("DB Connected!")
 }).catch(err => {
  console.log(Error, err.message);
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'https://simonhhen.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const itemRoutes = require('./api/routes/item');
itemRoutes(app);

const contributionRoutes = require('./api/routes/contribution');
contributionRoutes(app);

app.get('*', (req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
  return;
})
app.listen(port);
console.log('API server started on: ' + port);