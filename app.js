var express = require('express');
var app = express();
var fs = require('fs');

const port = 3000;

app.use(express.json());

var router = require('/home/pi/nodejs/homeIoT/router/index')(app,fs);

app.listen(3000,() => {
	console.log(`listening on port ${port}`);
});
