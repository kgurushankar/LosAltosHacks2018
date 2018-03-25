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

// links
const root = '';
const adminRoot = root + '/admin';



app.get('/', require('./index.js'));

app.post('/search', function (req, res) {
    var tournaments = Object.keys(require('./data/competitors.json'));
    var out = [];
    for (var i = 0; i < tournaments.length; i++) {
        if (tournaments[i].toLowerCase().includes(req.body.query.toLowerCase())) {
            out.push(tournaments[i]);
        }
    }
    console.log(out);
    res.json(out);
});

app.post('/register', function (req, res) {
    console.log(req.body);
    console.log(req.cookies);
    var data = req.body;
    var t = req.cookies.tournament;
    if (t == null) {
        res.json('no tournament specified');
    }
    var file = require('./data/competitors.json');
    file[t][data.firstName + "_" + data.lastName] = data;

    require('fs').writeFile('./data/competitors.json', JSON.stringify(file), function (err) {
        if (err) return console.log(err);
    });
    res.json({ 'message': 'success' });

})

app.post('/login', require('./login.js'));