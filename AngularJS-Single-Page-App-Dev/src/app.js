
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , todo = require('./routes/todo')
  , http = require('http')
  , path = require('path')
  , fs = require('fs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

//straight return of .html files for routed rendering.
app.engine('.html', function (path, options, fn){
    fs.readFile(path, 'utf8', function(err, html){
        if (err) return fn(err);
        fn(null, html);
    });
});


app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res) {
    res.render('index.html');
});
app.get('/todos', todo.getAll);
app.get('/todos/:id', todo.getById);
app.post('/todos', todo.save);
app.post('/todos/:id', todo.save);
app.delete('/todos', todo.delete);
app.delete('/todos/:id', todo.delete);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Pittsburgh TechFest 2013');
  console.log('Simple Web/REST server');
  console.log('listening on port ' + app.get('port'));
});
