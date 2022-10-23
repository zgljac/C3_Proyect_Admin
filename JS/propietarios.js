// FUNCION PARA CONSULTAR UN PROPIETARIO
function ConsultaPropietario ()
{
var datos = {"Numero_Identificacion" : document.getElementById("Numero_Identificacion").value,
}
$.ajax({
        type: "post",
        url: "http://localhost:3000/login",
        data : datos,
        dataType: "json",
        success: function (data) {
            if (data.existe == 1)
            {
                location.href = '../VISTAS/propietarios.html'
            }
            else
            {
                console.log("No existe en DB")
                alert ('El propietario no existe');
            }
        }
});
}