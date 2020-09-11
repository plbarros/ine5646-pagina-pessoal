
function adicionar(x){
    if(x == 1){
        var hobby = document.getElementById("fhob").value;
        lista = document.getElementById("lista1").innerHTML;
        lista = lista + "<li>" + hobby + "</li>";
        document.getElementById("lista1").innerHTML = lista;
    }
    else{
        var duvida = document.getElementById("fduv").value;
        var lista = document.getElementById("lista2").innerHTML;
        lista = lista + "<li>" + duvida + "</li>";
        document.getElementById("lista2").innerHTML = lista;
    }  
}


