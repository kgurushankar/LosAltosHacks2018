
module.exports = function (req, res) {
    var fs = require('fs');
    fs.readFile('./register.html', function read(err, data) {
        if (err) {
            throw err;
        }
        res.send(data.toString());
    });
}