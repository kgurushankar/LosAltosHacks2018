module.exports = function (req, res) {
    var user = req.body.username;
    var pass = req.body.password;
    const md5sum = require('crypto').createHash('md5').update(pass).digest('hex');
    var t = req.cookies.tournament;
    if (t == null) {
        res.json('no tournament specified');
    }
    var acc = require('./data/accounts.json')[t];
    if (acc[user] == md5sum) {
        var jwt = require('jsonwebtoken');
        const secret = require('fs').readFileSync('./index.html').toString();
        var tkn = jwt.sign({ username: user }, secret);
        res.cookie('Authentication', tkn).json('success');
    }
}