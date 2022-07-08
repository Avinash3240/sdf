document.getElementById("sub").onclick = function(){
    var x = document.getElementById("email").value;
    var y = document.getElementById("password").value;
   if(x=="Admin_sdf20@gmail.com"&&y=="admin_sdf20"){
    window.location.href="http://localhost/sdf/home.html";
   }
   else if(x!="Admin_sdf20@gmail.com"||y!="admin_sdf20"){
    window.alert("Enter Valid details");
    window.location.reload();
   }
}