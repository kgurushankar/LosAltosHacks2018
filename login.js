module.exports = function (req, res) {
    var user = req.body.username;
    var pass = req.body.password;
    const md5sum = require('crypto').createHash('md5').update(pass).digest('hex');
    var t = req.cookies.tournament;
    var acc = {};
    var db = require('./data.json');
    if (t == null) {
        var keys = Object.keys(db);
        for (var i = 0; i < keys.length; i++) {
            var dat = db[keys[i]].accounts;
            for (var j = 0; j < Object.keys(dat).length; j++) {
                var key = Object.keys(dat)[j];
                acc[key] = dat[key];
            }
        }
    } else {
        acc = db[t].accounts;
    }
    if (acc[user] == md5sum) {
        var jwt = require('jsonwebtoken');
        const secret = require('fs').readFileSync('./index.html').toString();
        var tkn = jwt.sign({ username: user, tournament: t }, secret);
        res.cookie('Authentication', tkn).json('success');
    } else {
        res.json("Invalid Credentials");
    }
}