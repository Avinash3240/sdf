<?php
session_start();
include "conn.php";

if(empty($_POST['email'])){
    header("Location: userlogging.html?error=email is required");
    echo "Email is reqired";
    exit();
}

$name = $_POST['name'];
$email = $_POST['email'];
$pass = $_POST['password'];

$sql2 = "INSERT INTO employee_db VALUES ('$name','$email','$pass','null','null','null')";
$result2 = mysqli_query($conn,$sql2);

header("Location:employeelogin.php");

?>
