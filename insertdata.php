<?php
session_start();
include "conn.php";

if(empty($_POST['email'])){
    header("Location: userlogging.html?error=email is required");
    echo "Email is reqired";
    exit();
}

$email = $_POST['email'];
$pass = $_POST['password'];

$sql2 = "INSERT INTO user_db VALUES ('null','$email','$pass')";
$result2 = mysqli_query($conn,$sql2);

header("Location:userlogin.html");

?>
