<?php
$conn = mysqli_connect('localhost','root','','example') or die('connection failed' .mysqli_connect_error());
if($conn){
    echo 'connected';
}
else{
    echo 'connection failed';
}
?>