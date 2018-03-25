module.exports = function (t, data) {

    var keys = Object.keys(data);
    var table = "<table align='right'><tr><th>First Name</th><th>Last Name</th><th>Date of Birth</th></tr>";
    for (var i = 0; i < keys.length; i++) {
        table += "<tr><td>" + data[keys[i]].firstName + "&nbsp;&nbsp;&nbsp;&nbsp;</td><td>" + data[keys[i]].lastName + "&nbsp;&nbsp;&nbsp;&nbsp;</td><td>" + data[keys[i]].date + "&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>"; //object
    }
    table += "</table>";

    return `<html>
	<head>
		<title>${data.name}</title>
		<style>
body {
	font-family: helvetica, sans-serif;
}

#description {
	position: absolute;
	width: 720px;
	border-bottom: 2px solid #333;
	border-radius: 4px;
	padding: 8px;
	font-size: 24pt;
}

#head-contact {
	position: absolute;
	top: 60px;
	left: 520px;
	border-radius 4px;
	padding: 8px;
	text-align: right;
}

.ro8 { position: absolute; left: 10; height:  80px;  }
.ro4 { position: absolute; left: 210; height: 160px; }
.ro2 { position: absolute; left: 410; height: 320px; }

.ro8 .red, .ro8 .blue { height: 40px; }
.ro4 .red, .ro4 .blue { height: 80px; }
.ro2 .red, .ro2 .blue { height: 160px; }

.first {
	position: absolute;
	left: 602;
	top: 350px;
	height: 20px;
}

.blue, .red, .first {
	display: table-cell;
	position: relative;
	border-bottom: 1px solid #000;
	padding-left: 4px;
	width: 196px;
	vertical-align: bottom;
}

.red {
	border-right: 1px solid #000;
	left: -200px;
}

.ro8 .red { top:  40px; }
.ro4 .red { top:  80px; }
.ro2 .red { top: 160px; }

.red:after, .blue:after, .first:after {
	position: absolute;
	top: calc( 100% + 4px );
	left: 8px;
	font-size: 6pt;
}

.red:after   { content: "Red player";  }
.blue:after  { content: "Blue player"; }
.first:after { content: "First place"; }

#ro8a  { top: 200px; }
#ro8b  { top: 280px; }
#ro8c  { top: 360px; }
#ro8d  { top: 440px; }
#ro4a  { top: 180px; }
#ro4b  { top: 340px; }
#ro2   { top: 140px; }

.bye { text-decoration: line-through; }

#athletes {
	position: absolute;
	top: 640px;
	left: 10px;
	width: 500px;
	text-align: left;
}

#athletes table     { width: 100%; }
#athletes th        { text-align: left; }
#athletes td.num    { width: 5%; }
#athletes td.name   { width: 45%; }
#athletes td.age    { width: 10%; }
#athletes td.weight { width: 20%; }
#athletes td.rank   { width: 20%; }

#placement {
	position: absolute;
	top: 720px;
	left: 612px;
	height: 163px;
	width: 200px;
	border: 1px solid #333;
}

#placement .place {
	position: relative;
	height: 40px;
	width: 200px;
	border-bottom: 1px solid #666;
}

#placement .place:after { position: absolute; top: 0px; left: 4px; font-size: 6pt; }

#first-place:after  { content: "First Place"; }
#second-place:after { content: "Second Place"; }
#third-place:after  { content: "Third Place"; }
#fourth-place:after { content: "Third Place"; }

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
		<div id="placement">
			<div class="place" id="first-place"></div>
			<div class="place" id="second-place"></div>
			<div class="place" id="third-place"></div>
			<div class="place" id="fourth-place"></div>
		</div>
	</body>
</html>

`;

}