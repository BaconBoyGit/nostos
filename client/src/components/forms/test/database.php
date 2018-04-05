<?php
$connection = mysql_connect("localhost", "root", "password"); // Establishing Connection with Server
$db = mysql_select_db("nostosTest", $connection); // Selecting Database from Server
if(isset($_POST['submit'])){ // Fetching variables of the form which travels in URL
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$pass = $_POST['pass'];

$query = mysql_query("insert into students(fname, lname, email, pass) values ('$fname', '$lname', '$email', '$pass')");
echo "<br/><br/><span>Data Inserted successfully...!!</span>";

}
mysql_close($connection); // Closing Connection with Server
?>