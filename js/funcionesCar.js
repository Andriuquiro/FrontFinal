//GET, POST , PUT Y DELETE

function getCar(){
    $.ajax({
        url:"http://155.248.212.18:8080/api/Car/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }

    });
}

function postCar(){

    let cajas = {
        gama:{idGama: +$("#select-gama").val()},
        name:$("#name").val(),
        brand:$("#brand").val(),
        year:$("#year").val(),
        description:$("#description").val()
    };
    console.log(cajas);
    $.ajax({
        url:"http://155.248.212.18:8080/api/Car/save",
        type:"POST",
        datatype:"JSON",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente el carro");
          
        }
    });

}

function putCar(){

}
function deleteCar(){
    
}

////////////////////////////////////////
function pintarRespuesta(items){
    //console.log(items.gama);
    let myTable="<table>";
    
    myTable+="<tr>";
    myTable+="<td>Nombre</td>";
    myTable+="<td>Modelo</td>";
    myTable+="<td>Año</td>";
    myTable+="<td>Descripcion</td>";
    myTable+="<td>Categoria</td>";
"</tr>";
    
    
    
    
    
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].name + "</td>";
        myTable+="<td>"+items[i].brand + "</td>";
        myTable+="<td>"+items[i].year + "</td>";
        myTable+="<td>"+items[i].description + "</td>";
        myTable+="<td>"+items[i].gama.name+ "</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function getGamaRelacion(){
    $.ajax({
        url:"http://155.248.212.18:8080/api/Gama/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            let $select =$("#select-gama");
            $.each(respuesta, function (id,name) {
                $select.append('<option value='+name.idGama+'>'+name.name+'</option>');
                //console.log(name);
            });
        }

    });
}