let count = 0;

document.getElementById("add_brand").onclick=function(){
    let x,y;
    do{
    x = prompt("Name of the brand");
    if(x!=0) break;
    if(x==0) alert("Brand can not be empty!");
    }while(1);
    do{
    y = prompt("Click 1 to Activate \nClick 2 to Deactivate");
    if(y==1||y==2) {
        break;
    }
    else if(y==0){
        alert("Status can not be empty!");
    }
    else {
        alert("Enter either 1 or 2");
        }
    }while(1);

    let table = document.getElementById("dynamictable");
    if(y==1){
    table.innerHTML += `<tr><td>${x}</td><td><p id="active">Active</p></td><td><button id="edi">Edit</button></td><td><button id="del">Delete</button></td></tr>`;
    }
    else if(y==2){
    table.innerHTML += `<tr><td>${x}</td><td><p id="inactive">Inactive</p></td><td><button id="edi">Edit</button></td><td><button id="del">Delete</button></td></tr>`;

    }
}
document.getElementById("edi").onclick=function(){
    let y,z;
    do{
        y = prompt("Click 1 to Activate \nClick 2 to Deactivate");
        if(y==1||y==2) {
            break;
        }
        else if(y==0){
            alert("status can not be empty!");
        }
        else {
            alert("enter either 1 or 2");
            }
        }while(1);
        console.log("hello");
}

document.querySelector("#del").onclick=function(){
    let x,y,z;
    if(y==1){
        table.innerHTML -= `<tr><td>${x}</td><td><p id="active">Active</p></td><td><button id="edi">Edit</button></td><td><button id="del">Delete</button></td></tr>`;
        }
        else if(y==2){
        table.innerHTML -= `<tr><td>${x}</td><td><p id="inactive">Inactive</p></td><td><button id="edi">Edit</button></td><td><button id="del">Delete</button></td></tr>`;
        }
        console.log("hi");
}

document.getElementById("hbtn").onclick = function(){
    window.location.href="./home.html";
}









/*


    if(count==2){
        document.getElementById("Added").innerText = "Added Brand: "+ x +" Set as " + z;
        document.getElementById("name4").innerText = x;
        document.getElementById("astatus4").innerText = z;
        }
    if(count==3){
        document.getElementById("Added").innerText = "Added Brand: "+ x +" Set as " + z;
        document.getElementById("name5").innerText = x;
        document.getElementById("astatus5").innerText = z;
        }
    if(count==4){
        document.getElementById("Added").innerText = "Added Brand: "+ x +" Set as " + z;
        document.getElementById("name6").innerText = x;
        document.getElementById("astatus6").innerText = z;
        }
}
document.getElementById("edit1").onclick=function(){
    var a = prompt("Click 1 to dectivate the status else click 2");
    if(a==1){
        document.getElementById("astatus1").innerText="Inactive";
    }
    else if(a==2) {
        document.getElementById("astatus1").innerText="Active";
    } 
}
document.getElementById("edit2").onclick=function(){
    var a = prompt("Click 1 to dectivate the status else if(a==2) click 2");
    if(a==1){
        document.getElementById("astatus2").innerText="Inactive";
    }
    else if(a==2) {
        document.getElementById("astatus2").innerText="Active";
    } 
}
document.getElementById("edit3").onclick=function(){
    var a = prompt("Click 1 to dectivate the status else if(a==2) click 2");
    if(a==1){
        document.getElementById("astatus3").innerText="Inactive";
    }
    else if(a==2) {
        document.getElementById("astatus3").innerText="Active";
    } 
}
document.getElementById("edit4").onclick=function(){
    var a = prompt("Click 1 to dectivate the status else if(a==2) click 2");
    if(a==1){
        document.getElementById("astatus4").innerText="Inactive";
    }
    else if(a==2) {
        document.getElementById("astatus4").innerText="Active";
    } 
}
document.getElementById("edit5").onclick=function(){
    var a = prompt("Click 1 to dectivate the status else if(a==2) click 2");
    if(a==1){
        document.getElementById("astatus5").innerText="Inactive";
    }
    else if(a==2) {
        document.getElementById("astatus5").innerText="Active";
    } 
}
document.getElementById("edit6").onclick=function(){
    var a = prompt("Click 1 to dectivate the status else if(a==2) click 2");
    if(a==1){
        document.getElementById("astatus6").innerText="Inactive";
    }
    else if(a==2) {
        document.getElementById("astatus6").innerText="Active";
    } 
}
document.getElementById("edit7").onclick=function(){
    var a = prompt("Click 1 to dectivate the status else if(a==2) click 2");
    if(a==1){
        document.getElementById("astatus7").innerText="Inactive";
    }
    else if(a==2) {
        document.getElementById("astatus7").innerText="Active";
    } 
}
document.getElementById("edit8").onclick=function(){
    var a = prompt("Click 1 to dectivate the status else if(a==2) click 2");
    if(a==1){
        document.getElementById("astatus8").innerText="Inactive";
    }
    else if(a==2) {
        document.getElementById("astatus8").innerText="Active";
    } 
}
document.getElementById("edit9").onclick=function(){
    var a = prompt("Click 1 to dectivate the status else if(a==2) click 2");
    if(a==1){
        document.getElementById("astatus9").innerText="Inactive";
    }
    else if(a==2) {
        document.getElementById("astatus9").innerText="Active";
    } 
}
document.getElementById("edit10").onclick=function(){
    var a = prompt("Click 1 to dectivate the status else if(a==2) click 2");
    if(a==1){
        document.getElementById("astatus10").innerText="Inactive";
    }
    else if(a==2) {
        document.getElementById("astatus10").innerText="Active";
    } 
}
*/