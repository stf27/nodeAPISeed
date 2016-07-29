var express = require('express');
var body_parser = require('body-parser');
var app = express();

// Config
var port = 9000;

app.use('/api', require('../routes/api.js')(express));

var server = app.listen(port, function() {
    console.log('Our server is running on port', port, '!');
});

module.exports = server;
