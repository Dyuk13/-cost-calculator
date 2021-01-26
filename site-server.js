var express = require('express');
var sassMiddleware = require('node-sass-middleware')

// создаём Express-приложение
var app = express();

app.set('port', process.env.PORT || 3001);

app.use(sassMiddleware({
  /* Options */
  src: __dirname + '/src/styles', //where the sass files are
  dest: __dirname + '/public', //where css should go
  debug: true,
}));

app.use('/script.js', express.static('./src/script.js'));
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendfile('./src/index.html');
});

app.listen(3001);

console.log('Server started');
