<html>
    <head>
    </head>
    <body>
    <div style="text-align: center;position:fixed;left:0;top:0;right:0;color:Black;background-color: aqua ;padding-bottom: 10px;"><h1>Admin Login</h1></div>
        <form action="Adminlogging.php" method="POST">
        <div id="ok" align="center" >
        <p id="email">Email</p> 
        <input type="email" id="email" name="email" placeholder="Enter your Email"><br>
        <p id="pass">password</p>
        <input type="password" id="password" name="password" placeholder="Enter Password...."><br>
        <input type="submit" name="submit" id="sub" />
    </form>
    </div>
    </body>
</html>
 <style>
    #password{
        margin-bottom: 10px;
        /*border-radius: 10px;*/
    }
    #ok{
        margin-left: 550px;
        margin-top:200px;
        margin-right: 550px;
       padding-top: 10px;
       padding-bottom: 30px;
        background-color:rgb(23, 62, 134);;
        border: 3px black solid;
    }
    #email{
        /*border-radius: 10px;*/
    }
    body{
        background-color: rgb(11, 28, 59);
    }
    #sub{
       /* border-radius: 10px;*/
    }
 </style>