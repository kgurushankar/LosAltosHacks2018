module.exports = function (req, res) {
    var out = `
    <!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>BrackIT</title>
  <link rel="stylesheet" href="/tournaments.css">
</head>

<body>
  <h1 id="header">Tournaments</h1>
  <p id="array">`;

    var query = req.query.query;
    var tournaments = Object.keys(require('./data.json'));
    for (var i = 0; i < tournaments.length; i++) {
        if (tournaments[i].toLowerCase().includes(query.toLowerCase())) {
            out += "<button onclick='info(\"" + tournaments[i] + "\")' id='tournament'>" + tournaments[i] + "</button>" + "<button onclick='go(\"" + tournaments[i] + "\")' id='select'>Register</button> <br>"
        }
    }
    out += `
  </p>
</body>
    <script type = "text/javascript" >
        array.innerHTML = text;
    function register(name) {
        document.cookie = "tournament = " + name;
        window.location.replace('/register.html')
    }
    function info(name) {
        document.cookie = "tournament = " + name;
        window.location.replace('/info.html')
    }
</script >

</html >

}`
    res.send(out);
}