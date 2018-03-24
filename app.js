var cfg = require('./data/config.json');

// #Express Stuff
var express = require('express');
var app = express();

app.use(express.static('./assets'));
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

app.all('/search', function (req, res) {
    var tournaments = Object.keys(require('./data/config'));
    var out = [];
    for (var i = 0; i < tournaments.length; i++) {
        if (tournaments[i].includes(req.body.query)) {
            out.push(tournaments[i]);
        }
    }
    console.log(out);
    res.json(out);
});
