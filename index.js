
module.exports = function (req, res) {
    var fs = require('fs');
    fs.readFile('./index.html', function read(err, data) {
        if (err) {
            throw err;
        }
        res.send(data.toString());
    });
}