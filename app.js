
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
    console.log(req.body);
    var tournaments = Object.keys(require('./data.json'));
    var out = [];
    for (var i = 0; i < tournaments.length; i++) {
        if (tournaments[i].toLowerCase().includes(req.body.query.toLowerCase())) {
            out.push(tournaments[i]);
        }
    }
    console.dir(out);
    res.json(out);
});

app.post('/register', function (req, res) {
    var data = req.body;
    var t = req.cookies.tournament;
    if (t == null) {
        res.json('no tournament specified');
    }
    var file = require('./data.json');
    file[t].competitors[data.firstName + "_" + data.lastName] = data;

    require('fs').writeFile('./data.json', JSON.stringify(file), function (err) {
        if (err) return console.log(err);
    });
    res.json({ 'message': 'success' });

})

app.post('/login', require('./login.js'));


app.get('/info', function (req, res) {
    var t = req.cookies.tournament;
    var t2 = require('./data.json')[t].config;
    var out = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>BrackIT</title>
        <link rel="stylesheet" href="info.css">
        <link rel="icon" href="/bracket.jpg">
      </head>
      <body>
        <h1 id="header">${t}</h1>
        <div class="bracket">
          <p>[Put Bracket Here]</p>
        </div>
        <div class="basicInfo">
          <p>Location: ${t2.location}</p>
          <p>Date: ${t2.date}</p>
        </div>
        <div class="matchups">
          <p class="matchupHeader">Matchups:</p>
        </div>
      </body>
    
      <script type="text/javascript">
        var header = document.getElementById("header");
        //header.innerHTML =
      </script>
    </html>
    `;
    res.send(out);
});