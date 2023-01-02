function myFunction(){
    var x = document.getElementById("pass");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");

    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else{
        x.type = "password";
        y.style.display = "block";
        z.style.display = "none";
    }
}
function myFunctionn(){
    var j = document.getElementById("passs");
    var k = document.getElementById("hide3");
    var l = document.getElementById("hide4");

    if(j.type === 'password'  ){
        j.type = "text";
        k.style.display = "block";
        l.style.display = "none";
    }
    else{
        j.type = "password";
        k.style.display = "block";
        l.style.display = "none";
    }
}