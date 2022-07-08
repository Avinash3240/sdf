<html>
    <head>
        <meta charset="UTF-8">
        <title>Home_page</title>
        <script src="https://kit.fontawesome.com/eb8e784c45.js" crossorigin="anonymous"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <p><i class="fa-solid fa-people-group">Employees</i></p>
        <hr>
        <div>
            <table id="table">
                <hr>
                <thead id="head">
                    <th>Name</th>
                    <th>Email_id</th>
                    <th>Sales per day</th>
                    <th>Total sales</th>
                </thead>
                <tbody id="dynamictable">
                <?php

                 session_start();
                 include "conn.php";

                 $name = "select name,email,sales_per_day,total_sales from employee_db";
                 $result = mysqli_query($conn,$name);
                 $rows = [];
                for ($x = 1; $x <= $conn->affected_rows; $x++) {
                   $rows[] = $result->fetch_assoc();
                echo "<tr><td>".$rows[$x - 1]["name"]."</td><td>".$rows[$x - 1]["email"]."</td><td>".$rows[$x - 1]['sales_per_day']."</td><td>".$rows[$x - 1]['total_sales']."</td></tr>";
               } 
                ?>
                </tbody>
            </table>
        </div>
    </body>
</html>
<style>
    .fa-people-group{
        font-size: 50px;
        display: flex;
        justify-content: center;
        padding: 50px 0px;
        background-color: brown;
        position: fixed;
        top:0px;
        left:0px;
        right:0px;
    }
 th{
    width:600px;
    text-align: left;
    height:50px;
    border: 1px solid;
    margin: 0px 0px;
 }
 td{
    height:50px;
    border: 1px solid;
    margin: 0px 0px;

 }
 #table{
    position: fixed;
    top:150px;
    left:0px;
    right:0px;
    background-color: aqua;
    padding-bottom: 100%;
    border: 1px solid;
 }
</style>


 <!--  <tr>
                        <td><?php echo $rows[0]["Name"] ?></td>
                        <td>Avi@3241.com</td>
                        <td>5,000</td>
                        <td>50,000</td>
                    </tr>
                    <tr>
                        <td><?php echo $rows[1]["Name"]?></td>
                        <td>Abhi@3241.com</td>
                        <td>8,000</td>
                        <td>80,000</td>
                    </tr>-->