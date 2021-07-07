function $id(id){
    return document.getElementById(id);
}

function cal(){
    var n1=$id("id1");
    var n2=$id("id2");
    var total

    total=parseFloat(n1.value)+parseFloat(n2.value)
    //document.write(total);

    id3.innerHTML=total;
}



