<?php
	// Declaring variables for the database
	$servername = "ns8037.hostgator.com";
    $username = "vluna_admin";
    $password = "nomames";
    $dbname = "vluna_aide";

	// Create a connection
	$conn = mysqli_connect($servername, $username, $password) or die("Could not connect database");
	mysqli_select_db($conn, $dbname) or die("Could not select database");
?>