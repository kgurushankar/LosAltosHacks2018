module.exports = function (t, data) {

    var keys = Object.keys(data);
    var table = "<table align='right'><tr><th>First Name</th><th>Last Name</th><th>Date of Birth</th></tr>";
    for (var i = 0; i < keys.length; i++) {
        table += "<tr><td>" + data[keys[i]].firstName + "&nbsp;&nbsp;&nbsp;&nbsp;</td><td>" + data[keys[i]].lastName + "&nbsp;&nbsp;&nbsp;&nbsp;</td><td>" + data[keys[i]].date + "&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>"; //object
    }
    table += "</table>";

    return `<html>
	<head>
		<title>BrackIT</title>
		<style>
      body {
      	font-family: 'Copperplate';
        background-image: url("/background.jpg");
      }

      #bracket {
        text-align: center;
      }

      #description {
      	position: absolute;
      	width: 2000px;
      	border-bottom: 2px solid white;
      	border-radius: 4px;
      	padding: 8px;
      	font-size: 100px;
        color: white;
        text-decoration: none;
      }

      #head-contact {
      	position: absolute;
      	top: 60px;
      	left: 520px;
        border: 4px solid white;
      	padding: 8px;
      	text-align: right;
        color: white;
      }

      .ro8 { position: absolute; left: 60; height:  80px;  color: white;}
      .ro4 { position: absolute; left: 260; height: 160px; color: white;}
      .ro2 { position: absolute; left: 460; height: 320px; color: white;}

      .ro8 .red, .ro8 .blue { height: 40px; color: white;}
      .ro4 .red, .ro4 .blue { height: 80px; color: white;}
      .ro2 .red, .ro2 .blue { height: 160px; color: white;}

      .first {
      	position: absolute;
      	left: 652;
      	top: 350px;
      	height: 20px;
        color: white;
      }

      .blue, .red, .first {
      	display: table-cell;
      	position: relative;
      	border-bottom: 1px solid white;
      	padding-left: 4px;
      	width: 196px;
      	vertical-align: bottom;
        color: white;
      }

      .red {
      	border-right: 1px solid white;
      	left: -200px;
        color: white;
      }

      .ro8 .red { top:  40px; color: white;}
      .ro4 .red { top:  80px; color: white;}
      .ro2 .red { top: 160px; color: white;}

      .red:after, .blue:after, .first:after {
      	position: absolute;
      	top: calc( 100% + 4px );
      	left: 8px;
      	font-size: 6pt;
        color: white;
      }

      .red:after   {color: white;}
      .blue:after  {color: white;}
      .first:after { content: "First Place"; color: white; font-size: 20px;}

      #ro8a  { top: 200px; color: white;}
      #ro8b  { top: 280px; color: white;}
      #ro8c  { top: 360px; color: white;}
      #ro8d  { top: 440px; color: white;}
      #ro4a  { top: 180px; color: white;}
      #ro4b  { top: 340px; color: white;}
      #ro2   { top: 140px; color: white;}

      .bye { text-decoration: line-through; color: white;}

      #athletes {
      	position: absolute;
      	top: 640px;
      	left: 10px;
      	width: 500px;
      	text-align: left;
        color: white;
        margin-left: 50px;
        display: inline-block;
      }

      #athletes table     { width: 100%; color: white;}
      #athletes th        { text-align: left; color: white;}
      #athletes td.num    { width: 5%; color: white;}
      #athletes td.name   { width: 45%; color: white;}
      #athletes td.age    { width: 10%; color: white;}
      #athletes td.weight { width: 20%; color: white;}
      #athletes td.rank   { width: 20%; color: white;}

      #placement {
      	position: absolute;
      	top: 720px;
      	left: 612px;
      	height: 163px;
      	width: 200px;
      	border: 1px solid white;
        color: white;
      }

      #placement .place {
      	position: relative;
      	height: 40px;
      	width: 200px;
      	border-bottom: 1px solid white;
        color: white;
      }

      #placement .place:after { position: absolute; top: 0px; left: 4px; font-size: 6pt; color: white;}

      #first-place:after  { content: "First Place"; color: white;}
      #second-place:after { content: "Second Place"; color: white;}
      #third-place:after  { content: "Third Place"; color: white;}
      #fourth-place:after { content: "Third Place"; color: white;}

		</style>
	</head>
	<body>
		<div id="description">${t}</div>
		<div id="bracket">
			<div class="ro8 match" id="ro8a">
				<div class="blue">${keys[0]}</div>
				<div class="red">${keys[1]}</div>
			</div>
			<div class="ro8 match" id="ro8b">
				<div class="blue">${keys[2]}</div>
				<div class="red">${keys[3]}</div>
			</div>
			<div class="ro8 match" id="ro8c">
				<div class="blue">${keys[4]}</div>
				<div class="red">${keys[5]}</div>
			</div>
			<div class="ro8 match" id="ro8d">
				<div class="blue">${keys[6]}</div>
				<div class="red">${keys[7]}</div>
			</div>

			<div class="ro4 match" id="ro4a">
				<div class="blue"> </div>
				<div class="red"> </div>
			</div>
			<div class="ro4 match" id="ro4b">
				<div class="blue"> </div>
				<div class="red"> </div>
			</div>

			<div class="ro2 match" id="ro2">
				<div class="blue"> </div>
				<div class="red"> </div>
			</div>

			<div class="first"></div>
		</div>
		<div id="athletes"><h2>Athletes in Division</h2>
        ${table}</div>
    <!--
		<div id="placement">
			<div class="place" id="first-place"></div>
			<div class="place" id="second-place"></div>
			<div class="place" id="third-place"></div>
			<div class="place" id="fourth-place"></div>
		</div>
    -->
	</body>
</html>

`;

}
