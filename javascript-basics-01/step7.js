function calc(){
    var a=parseInt(document.getElementById("shoe_size").value);
    var b= parseInt(document.getElementById("year").value)
    var res=((((a*2)+5)*70)-b)+1766;
    alert(res);

}