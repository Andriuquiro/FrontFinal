//GET, POST , PUT Y DELETE

function getGama(){
    $.ajax({
        url:"http://155.248.212.18:8080/api/Gama/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            //console.log(respuesta);
            pintarRespuesta(respuesta);
        }

    });
}

function postGama(){
    if ($("#name").val().length==0 || $("#description").val().length == 0){
        alert("Todos los campos son obligatorios");
    }else{

    }
    let cajas = {
        name:$("#name").val(),
        description:$("#description").val()
    };
    
    $.ajax({
        url:"http://155.248.212.18:8080/api/Gama/save",
        type:"POST",
        datatype:"JSON",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(cajas),        
        success:function(respuesta){
            alert("se creo correctamente la gama");
            window.location.reload();
        }
    });
}

function putGama(){
    if ($("#name").val().length==0 || $("#description").val().length == 0){
        alert("Todos los campos son obligatorios para que se actualice correctamente");
    }else{

    }
    let cajas = {
        idGama:idBotonActualizar,
        name:$("#name").val(),
        description:$("#description").val()
    };
    
    $.ajax({
        url:"http://155.248.212.18:8080/api/Gama/update",
        type:"PUT",
        datatype:"JSON",
        contentType: "application/json",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se actualizo correctamente la gama");
            window.location.reload();
        }
    });

}
function deleteGama(idBoton){
    let myData={
        id:idBoton
    };
    $.ajax({
        url:"http://155.248.212.18:8080/api/Gama/"+idBoton,
        type:"DELETE",
        datatype:"JSON",
        data:JSON.stringify(myData),
        contentType: "application/json",
        success:function(respuesta){
            alert("se ha borrado correctamente la gama")
            window.location.reload();
        }

    });

}


////////////////////////////////////////
function pintarRespuesta(items){
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].description+"</td>";
        myTable+="<td> <button onclick='putGama("+items[i].idGama+")'> Actualizar </button> ",
        myTable+="<td> <button onclick='deleteGama("+items[i].idGama+")'> Borrar </button> ",
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").append(myTable);
}
