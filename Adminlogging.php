<?php

session_start();
include "conn.php";

if(empty($_POST['email'])){
    header("Location: Adminlogin.php?error=email is required");
    echo "Email is reqired";
    exit();
}

//mysql_queries
$sql = "select * from admindb";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);

if($row['email'] == $_POST['email'] && $row['password'] == $_POST['password']){
    header("Location:home.html");
}
else{
    header("Location:Adminlogin.php");
}
?>