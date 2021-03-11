function ch(){
    var a=document.getElementById("password").value;
    var b=document.getElementById("confirmation").value;
    if(a!=b){
        document.getElementById("confirmation").style.border="1px red solid";
    }
    
}