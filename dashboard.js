
module.exports = function (req, res) {
    var jwt = require('jsonwebtoken');
    const secret = require('fs').readFileSync('./secret').toString();
    var data = req.cookies.Authentication;
    jwt.verify(data, secret, function (err, token) {
        if (err) {
            res.redirect('/login.html');
        } else {
            console.log(token);
            var t = token.tournament;
            var out = `<!DOCTYPE html>
    <html>

    <head>
      <meta charset="utf-8">
      <link rel="stylesheet" href="dashboard.css">
      <link rel="icon" href="bracket.jpg">
      <title>BrackIT</title>
    </head>

    <body>
      <h1 id="header">Dashboard</h1>
      <p id="competitors"></p>
      <div style="display: none" id="hidden">
        <div id="newInputForm">
          <input type="text" name="" value="" placeholder="Tournament Name">
          <input type="text" name="" value="" placeholder="Location">
          <input type="date" name="" value="" placeholder="Date">
        </div>
        <div class="col-md-3 col-sm-3 col-xs-6 buttons submit">
          <a href="#" class="btn btn-sm animated-button thar-one">BrackIT!</a>
        </div>
      </div>
      <div class="sidebar">
        <a id="project" href="#">${t}</a>
        <a id="newTournament" style="position: fixed; bottom: 0; margin-bottom: 10px" href="#">Create New Tournament</a>
      </div>
    </body>

    <script src="/jquery.js"></script>
    <script type="text/javascript">
      var project = document.getElementById('project');

      var hidden = document.getElementById('hidden');
      var newTournament = document.getElementById('newTournament')
      var header = document.getElementById('header')
      var competitors = document.getElementById('competitors')

      project.onclick = function () {
        //console.log(project.innerHTML);
        header.innerHTML = "Competitors";
        if (hidden.style.display == "block") {
          hidden.style.display = "none"
        }
        $.ajax({
          url: '/getCompetitors',
          dataType: "json",
          type: "GET",
          cache: false,
          data: { },
          success: function (data, textStatus, jqXHR) {
            console.log(data)

            var keys = Object.keys(data);
            for (var i = 0; i<keys.length;i++){
              competitors.innerHTML += data[keys[i]].firstName + " " + data[keys[i]].lastName + " " + data[keys[i]].date + " " + data[keys[i]].personalEmail + " " + data[keys[i]].parentEmail + "<br>" //object
            }
            //localStorage.myArray = JSON.stringify(data);
            //window.location.replace('/tournaments.html');
            //data is what I will send you
            //this is what you will do with the info
          },
          error: function (jqXHR, textStatus, err) {
            //Prints out the error
            alert('text status ' + textStatus + ', err ' + err);
          }
        });
      }

      newTournament.onclick = function () {
        header.innerHTML = "New"
        if (hidden.style.display == "none") {
          hidden.style.display = "block"
        }
        competitors.innerHTML = "";
      }
    </script>

    </html>`;
            res.send(out);
        }
    });
}
