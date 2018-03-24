//var cfg = require("./data/config.1.js");


// #Express Stuff
var express = require('express');
var app = express();

// app.use(express.static('./assets'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.listen(8080);

// For auth
var jwt = require('jsonwebtoken');
//const Secret = cfg.Secret;

// links
const root = '';
const adminRoot = root + '/admin';



app.get('/', require('./index.js'));
