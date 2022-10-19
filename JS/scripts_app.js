function ingresar ()
{
    alert('Hola esta funcionando)

    var datos = {"usuario" : document.getElementById("usuario").value(),
                    "contrasena" : $("#contrasena").val()
    }
    console.log(datos);

    $.ajax({
        type: "POST",
        url: "http://localhost",
        data : datos,
        dataType: "json",
        s



    })

}