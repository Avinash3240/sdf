<?php

session_start();
include "conn.php";

if(empty($_POST['email'])){
    header("Location: employeelogin.php?error=email is required");
    exit();
}
$x = $_POST['email'];

//mysql_queries
$sql = "select * from employee_db where email='$x'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);

if($row['password'] == $_POST['password']){
    header("Location:employeehome.html");
}
else{
    header("Location:employeelogin.php?error=entervalidetails");
}
?>