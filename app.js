
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

app.use('/', function (req, res, next) {
    var data = req.cookies.Authentication;
    var jwt = require('jsonwebtoken');
    const secret = require('fs').readFileSync('secret').toString();
    jwt.verify(data, secret, function (err, token) {
        if (err) {
            res.redirect('/login.html');
        } else {
            next();
        }
    });


})
//   ________      ________        ___    ___  _________    ___  ___      ___      ________       ________          ________      _______       ___           ________      ___       __           _________    ___  ___      ___      ________           ________       _______       _______       ________      ________           ________      ________      _____ ______       ___      ________           ________    _______       ________      _____ ______       ________      
//  |\   __  \    |\   ___  \     |\  \  /  /||\___   ___\ |\  \|\  \    |\  \    |\   ___  \    |\   ____\        |\   __  \    |\  ___ \     |\  \         |\   __  \    |\  \     |\  \        |\___   ___\ |\  \|\  \    |\  \    |\   ____\         |\   ___  \    |\  ___ \     |\  ___ \     |\   ___ \    |\   ____\         |\   __  \    |\   ___ \    |\   _ \  _   \    |\  \    |\   ___  \        |\   __  \  |\  ___ \     |\   __  \    |\   _ \  _   \    |\   ____\     
//  \ \  \|\  \   \ \  \\ \  \    \ \  \/  / /\|___ \  \_| \ \  \\\  \   \ \  \   \ \  \\ \  \   \ \  \___|        \ \  \|\ /_   \ \   __/|    \ \  \        \ \  \|\  \   \ \  \    \ \  \       \|___ \  \_| \ \  \\\  \   \ \  \   \ \  \___|_        \ \  \\ \  \   \ \   __/|    \ \   __/|    \ \  \_|\ \   \ \  \___|_        \ \  \|\  \   \ \  \_|\ \   \ \  \\\__\ \  \   \ \  \   \ \  \\ \  \       \ \  \|\  \ \ \   __/|    \ \  \|\  \   \ \  \\\__\ \  \   \ \  \___|_    
//   \ \   __  \   \ \  \\ \  \    \ \    / /      \ \  \   \ \   __  \   \ \  \   \ \  \\ \  \   \ \  \  ___       \ \   __  \   \ \  \_|/__   \ \  \        \ \  \\\  \   \ \  \  __\ \  \           \ \  \   \ \   __  \   \ \  \   \ \_____  \        \ \  \\ \  \   \ \  \_|/__   \ \  \_|/__   \ \  \ \\ \   \ \_____  \        \ \   __  \   \ \  \ \\ \   \ \  \\|__| \  \   \ \  \   \ \  \\ \  \       \ \   ____\ \ \  \_|/__   \ \   _  _\   \ \  \\|__| \  \   \ \_____  \   
//    \ \  \ \  \   \ \  \\ \  \    \/  /  /        \ \  \   \ \  \ \  \   \ \  \   \ \  \\ \  \   \ \  \|\  \       \ \  \|\  \   \ \  \_|\ \   \ \  \____    \ \  \\\  \   \ \  \|\__\_\  \           \ \  \   \ \  \ \  \   \ \  \   \|____|\  \        \ \  \\ \  \   \ \  \_|\ \   \ \  \_|\ \   \ \  \_\\ \   \|____|\  \        \ \  \ \  \   \ \  \_\\ \   \ \  \    \ \  \   \ \  \   \ \  \\ \  \       \ \  \___|  \ \  \_|\ \   \ \  \\  \|   \ \  \    \ \  \   \|____|\  \  
//     \ \__\ \__\   \ \__\\ \__\ __/  / /           \ \__\   \ \__\ \__\   \ \__\   \ \__\\ \__\   \ \_______\       \ \_______\   \ \_______\   \ \_______\   \ \_______\   \ \____________\           \ \__\   \ \__\ \__\   \ \__\    ____\_\  \        \ \__\\ \__\   \ \_______\   \ \_______\   \ \_______\    ____\_\  \        \ \__\ \__\   \ \_______\   \ \__\    \ \__\   \ \__\   \ \__\\ \__\       \ \__\      \ \_______\   \ \__\\ _\    \ \__\    \ \__\    ____\_\  \ 
//      \|__|\|__|    \|__| \|__||\___/ /             \|__|    \|__|\|__|    \|__|    \|__| \|__|    \|_______|        \|_______|    \|_______|    \|_______|    \|_______|    \|____________|            \|__|    \|__|\|__|    \|__|   |\_________\        \|__| \|__|    \|_______|    \|_______|    \|_______|   |\_________\        \|__|\|__|    \|_______|    \|__|     \|__|    \|__|    \|__| \|__|        \|__|       \|_______|    \|__|\|__|    \|__|     \|__|   |\_________\
//                               \|___|/                                                                                                                                                                                                 \|_________|                                                                \|_________|                                                                                                                                             \|_________|
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
//Rethink this sometime
app.post('/newTournament', function (req, res) {
    var tournament = req.body;
    var data = require('./data.json');
    if (data[tournament.name] != null) {
        res.json({ "message": "error:Tournament already exists" });
    }
    data[tournament.name] = {
        competitors: {},
        accounts: {},
        config: {}
    };
    data[tournament.name].config = tournament.config;
    data[tournament.name].accounts = { [tournament.username]: [tournament.password] };

})


app.get('/protect', function (req, res) {
    res.send('hello');
})

app.get('/dashboard', require('./dashboard.js'))