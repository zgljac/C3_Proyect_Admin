// FUNCION PARA CONSULTAR UN PROPIETARIO
function ConsultaPropietario ()
{
var datos = {"Numero_Identificacion" : document.getElementById("Numero_Identificacion").value,
}
console.log(datos)

$.ajax({
        type: "post",
        url: "http://localhost:3000/Consultar_Propietario",
        data : datos,
        dataType: "json",
        success: function (data) {
            if (data.result.length > 0)
            {
                let propietario = ""
                let cant = 0

                for (i = 0; i < data.result.length; i++)
                {
                    $('#gm').remove();
                }
                for (i = 0; i < data.result.length; i++)
                {
                    cant = cant + 1
                    propietario = cant +' '+'Primer_Nombre:'+' '+data.result[i].Primer_Nombre+' '+data.result[i].Segundo_Nombre+' '+data.result[i].Primer_Apellido+' '+data.result[i].Segundo_Apellido+' '+data.result[i].correo+' '+data.result[i].Telefono+' '+data.result[i].Direccion_Contacto+'\n'
                    $('#propietario').append('<p id="gm">'+propietario+'</p>')
                }
            }
            else
            {
                console.log("No existe en DB")
                alert ('El propietario no existe');
            }
        }
});
}

// FUNCION PARA CONSULTAR UN PROPIETARIO
function ListarUsers(){

	var datos={}	

$.ajax({
	type:"post",
	url:"http://localhost:3003/MostrarUsuarios",
	data:datos,
	dataType:"json",
	success:function(data){
			if(data.result.length>0)
            { 
            	let user=""
            	let cant=0

            	for(i=0;i<data.result.length;i++)
                {
                   $('#gm').remove()
                }
                  for(i=0;i<	data.result.length;i++)
                {             
                    cant=cant+1                       
                    user=cant +' '+'Nombre:'+' '+data.result[i].Nombre+' '+ data.result[i].Correo+' '+data.result[i].UserName+ " "+data.result[i].Id+'\n'
                    $('#user').append('<p id="gm">'+user+'</p>')                                  
                }   
            }
            else
            {console.log('No hay registros de Usuarios')

                alert('No hay registros de Usuarios')
            }
	}
})
}

// FUNCION PARA REGISTRAR UN PROPIETARIO
function Agregar_Propietario()
{
	var datos={
        "Direccion_Contacto":document.getElementById("Direccion_Contacto").value,
        "Numero_Identificacion":document.getElementById("Numero_Identificacion").value,
        "Primer_Apellido":document.getElementById("Primer_Apellido").value,
		"Primer_Nombre":document.getElementById("Primer_Nombre").value,
        "Segundo_Apellido":document.getElementById("Segundo_Apellido").value,
		"Segundo_Nombre":document.getElementById("Segundo_Nombre").value,
		"Telefono":document.getElementById("Telefono").value,
        "correo":document.getElementById("correo").value
	}
console.log(datos)
$.ajax({
	type:"post",
	url:"http://localhost:3000/Agregar_Propietarios",
	data:datos,
	dataType:"json",
	success:function(data){
		if (data.save == 1)
		{
			console.log('Propietario Almacenado - OK')
			alert('El Propietario fue almacenado Satisfactoriamente')
			location.href='../VISTAS/inmuebles.html'
		}
		else
		{
			console.log('Fatal Error - Propietario NO almacenado')
			alert('Fatal Error - Propietario NO Almacenado')
		}
	}
})
}

// FUNCION PARA ACTUALIZAR UN PROPIETARIO
function Actualizar(){
	var datos={
        "Direccion_Contacto":document.getElementById("Direccion_Contacto").value,
        "Primer_Apellido":document.getElementById("Primer_Apellido").value,
		"Primer_Nombre":document.getElementById("Primer_Nombre").value,
        "Segundo_Apellido":document.getElementById("Segundo_Apellido").value,
		"Segundo_Nombre":document.getElementById("Segundo_Nombre").value,
		"Telefono":document.getElementById("Telefono").value,
        "correo":document.getElementById("correo").value
	}
$.ajax({
	type:"post",
	url:"http://localhost:3000/Actualizar_Propietario",
	data:datos,
	dataType:"json",
	success:function(data){
		if(data.save == 1)
		{
			console.log('Propietario Actualizado Satisfactoriamente')
			alert('Propietario Actualizado Satisfactoriamente')
			location.href='../VISTAS/menu.html'
		}
		else
		{
			console.log('Error - Propietario NO Actualizado')
			alert('Error - Propietario NO Actualizado')
		}
	}
})
}

// FUNCION PARA ELIMINAR UN PROPIETARIO
function Eliminar(){

	var datos={
		"Id":document.getElementById("Id").value,		
	}
$.ajax({
	type:"post",
	url:"http://localhost:3003/delete",
	data:datos,
	dataType:"json",
	success:function(data){
		if(data.eliminado==1)
		{
			console.log('Usuario Eliminado Satisfactoriamente')
			alert('Usuario Eliminado Satisfactoriamente')
			location.href='../index.html'
		}
		else
		{
			console.log('Error')
			alert('Error - Usuario No Eliminado')
		}
	}
})
}