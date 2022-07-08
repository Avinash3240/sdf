<?php $message = "Hello Folks"; ?> 
<script>  
  alert("<?php echo $message; ?>");  
</script>



<?php

 

$con = mysqli_connect("localhost","root","","example");

if (!$con)

  {

  die('Could not connect: ' . mysqli_error());

  }


$result = mysqli_query($con,"SELECT * FROM employee_db");

while($row = mysqli_fetch_array($result))

  {
    $x = $row['password'];
    $y = $row['email'];

  echo "<tr><td>$x</td><td>$y</td></tr>";

  echo "<br />";

  }

 

?>