module.exports = function (req, res) {
    var user = req.body.username;
    var pass = req.body.password;
    var t = req.cookie.tournament;
    if (t == null) {
        res.json('no tournament specified');
    }
    var acc = require('./data/accounts.json')[t];
    if ()


}