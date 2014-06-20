var express = require('express');
var app = express();

app.use(express.bodyParser());
app.use(express.cookieParser());

app.use(express.static(__dirname+'/www'));

app.listen(8080);
console.log('Listening on port 8080...');