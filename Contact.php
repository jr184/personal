<?php

/*Designed by Mark Leroy @ http://www.helpvid.net*/

/* Email Variables */
$emailSubject = 'Contact!'; /*Make sure this matches the name of your file*/
$webMaster = 'jr184@humboldt.edu';

/* Data Variables */
$name = $_POST['name'];
$email = $_POST['email'];
// $comments = $_POST['comments'];
$url = $_POST['UserURL'];
$message = $_POST['message'];



$body = <<<EOD
<br><hr><br>
Name: $name <br>
Email: $email <br>
Website: $url <br>
Message: $message <br>
EOD;
$headers = "From: $email\r\n";
$headers .= "Content-type: text/html\r\n";
$success = mail($webMaster, $emailSubject, $body,
$headers);

// ***Note***
// Content Type might need to be changed on Contact.html to fit php page format.
// Look up his videos to confirm the "type" of the input tags

/* Results rendered as HTML */
$theResults = <<<EOD
<html>
	<head>
		<title>sent message</title>
		<meta http-equiv="refresh" content="3;https://jr184.github.io/personal/Contact.html">
		<style type="text/css">
		<!--
		body {
			background-image: url('img/Head_of_Lake_Louise_Alberta_WithCompass.jpg');  
			background-repeat: no-repeat;
			background-size:cover;
			background-attachment: fixed;
			font-family: Economica;	
			padding:0px; 
			margin:0px; 
			background-color:#fff;
		}
		.Container {
			width: 200px;
			margin: 0 auto;
			padding: 15px;
			border-radius: 10px;			
			border: 2px solid #ffffff;	
			box-shadow: 0px 1px 10px #4d4d4d;			
			background-color: rgba(153, 153, 153,0.7);
		}
		.Title {
			margin: 0px;
			padding: 0px;
			color: #ffffff;
			font-size: 35px;
			text-shadow: 2px 2px 2px #000000;
		}
		hr {
			width: 100%;
			border-bottom: 1px solid #ffffff; 		
		}
		.Content {
			padding-top: 10px;
			color: #000000;
			font-size: 20px;
		}
		-->
		</style>
	</head>
	<body>
		<div class="Container">
			<div>
				<h2 class="Title">Message sent!</h2>
				<div>
					<hr />
				</div>
			</div>
			<div class="Content">
				<p>Thank you for contacting me, I'll be with you shortly.</p>
			</div>
		</div>
	</body>
</html>
EOD;
echo "$theResults";
?>