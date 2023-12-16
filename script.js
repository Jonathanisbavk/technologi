const url_api = "http://localhost:3000/api/pagos-facturas/";
const api_empleados = "http://localhost:3000/api/empleados/";
const api_informacion_consultoria = "http://localhost:3000/api/informacion-consultoria/";
const api_users = "http://localhost:3000/api/users/"

function listar() {
    //limpiar contenido actual de la tabla
    document.getElementById("tbody").innerHTML = "";

    axios.get(url_api)
        .then(function (response) {
            for (var index = 0; index < response.data.length; index++) {
                var fila = "<tr>" + //new fila
                    "<td>" + response.data[index].cliente + "</td>" +
                    "<td>" + response.data[index].tipo_servicio + "</td>" +
                    "<td>" + response.data[index].fecha + "</td>" +
                    "<td>" + response.data[index].monto + "</td>" +
                    "<td>" + response.data[index].estado + "</td>" +
                    "</tr>"; //final fila
                //insercion al codigo html
                document.getElementById("tbody").insertRow(-1).innerHTML = fila;
            }
        })
        .catch(function (error) {
            console.log("Error al realizar la petición");
        });
}

function guardar() {
    const nuevaFactura = JSON.stringify({
        cliente: cliente.value,
        tipo_servicio: tipo_servicio.value,
        fecha: fecha.value,
        monto: monto.value,
        estado: estado.value
    })
    //petición HTTP para guardar los datos
    axios.post(url_api, nuevaFactura, {
        headers: { 'Content-Type': 'application/json' }
    })
        .then(function (response) {
            alert(response.data);
            listar();
        })
        .catch(function (error) {
            console.log(error)
        })
}

function buscarCliente() {
    const cliente = document.getElementById("cliente_buscar").value;
    const url_busqueda = `${url_api}filtrar?cliente=${cliente}`;
    realizarBusqueda(url_busqueda);
}

function buscarFecha() {
    const fecha = document.getElementById("fecha_buscar").value;
    const url_busqueda = `${url_api}filtrar?fecha=${fecha}`;
    realizarBusqueda(url_busqueda);
}

function buscarMonto() {
    const monto = document.getElementById("monto_buscar").value;
    const url_busqueda = `${url_api}filtrar?monto=${monto}`;
    realizarBusqueda(url_busqueda);
}

function buscarEstado() {
    const estado = document.getElementById("estado_buscar").value;
    const url_busqueda = `${url_api}filtrar?estado=${estado}`;
    realizarBusqueda(url_busqueda);
}

function realizarBusqueda(url_busqueda) {
    //limpiado de contenido
    document.getElementById("tbody_busqueda").innerHTML = "";

    axios.get(url_busqueda)
        .then(function (response) {
            for (var index = 0; index < response.data.length; index++) {
                var fila = "<tr>" +
                    "<td>" + response.data[index].cliente + "</td>" +
                    "<td>" + response.data[index].tipo_servicio + "</td>" +
                    "<td>" + response.data[index].fecha + "</td>" +
                    "<td>" + response.data[index].monto + "</td>" +
                    "<td>" + response.data[index].estado + "</td>" +
                    "</tr>";
                //insercion al html
                document.getElementById("tbody_busqueda").insertRow(-1).innerHTML = fila;
            }
        })
        .catch(function (error) {
            console.log(`Error al realizar la búsqueda`);
        });
}




function listarEmpleados() {
    //limpiar contenido actual de la tabla
    document.getElementById("tbody").innerHTML = "";

    axios.get(api_empleados)
        .then(function (response) {
            for (var index = 0; index < response.data.length; index++) {
                var fila = "<tr>" + //new fila
                    "<td>" + response.data[index].nombre + "</td>" +
                    "<td>" + response.data[index].correo + "</td>" +
                    "<td>" + response.data[index].cargo + "</td>" +
                    "</tr>"; //final fila
                //insercion al codigo html
                document.getElementById("tbody").insertRow(-1).innerHTML = fila;
            }
        })
        .catch(function (error) {
            console.log("Error al realizar la petición");
        });
}

function guardarEmpleados() {
    const nuewEmpleado = JSON.stringify({
        nombre: nombre.value,
        correo: correo.value,
        cargo: cargo.value
    })
    //petición HTTP para guardar los datos
    axios.post(api_empleados, nuewEmpleado, {
        headers: { 'Content-Type': 'application/json' }
    })
        .then(function (response) {
            alert(response.data);
            listarEmpleados();
        })
        .catch(function (error) {
            console.log(error)
        })
}

function buscarEmpleado() {
    const nombre = document.getElementById("empleado_buscar").value;
    const empleados_busqueda = `${api_empleados}filtrar?nombre=${nombre}`;
    realizarBusquedaEmpleados(empleados_busqueda);
}

function buscarCorreoEmpleado() {
    const correo = document.getElementById("correo_buscar").value;
    const empleados_busqueda = `${api_empleados}filtrar?correo=${correo}`;
    realizarBusquedaEmpleados(empleados_busqueda);
}

function buscarCargoEmpleado() {
    const cargo = document.getElementById("cargo_buscar").value;
    const empleados_busqueda = `${api_empleados}filtrar?cargo=${cargo}`;
    realizarBusquedaEmpleados(empleados_busqueda);
}


function realizarBusquedaEmpleados(empleados_busqueda) {
    //limpiado de contenido
    document.getElementById("tbody_busqueda").innerHTML = "";

    axios.get(empleados_busqueda)
        .then(function (response) {
            for (var index = 0; index < response.data.length; index++) {
                var fila = "<tr>" +
                    "<td>" + response.data[index].nombre + "</td>" +
                    "<td>" + response.data[index].correo + "</td>" +
                    "<td>" + response.data[index].cargo + "</td>" +
                    "</tr>";
                //insercion al html
                document.getElementById("tbody_busqueda").insertRow(-1).innerHTML = fila;
            }
        })
        .catch(function (error) {
            console.log(`Error al realizar la búsqueda`);
        });
}




function listarInfoConsultoria() {
    //limpiar contenido actual de la tabla
    document.getElementById("tbody").innerHTML = "";

    axios.get(api_informacion_consultoria)
        .then(function (response) {
            for (var index = 0; index < response.data.length; index++) {
                var fila = "<tr>" + //new fila
                    "<td>" + response.data[index].cliente + "</td>" +
                    "<td>" + response.data[index].tipo_servicio + "</td>" +
                    "<td>" + response.data[index].fecha + "</td>" +
                    "<td>" + response.data[index].pregunta_frecuente + "</td>" +
                    "<td>" + response.data[index].estado + "</td>" +
                    "</tr>"; //final fila
                //insercion al codigo html
                document.getElementById("tbody").insertRow(-1).innerHTML = fila;
            }
        })
        .catch(function (error) {
            console.log("Error al realizar la petición");
        });
}

function guardarInfoConsultoria() {
    const nuevaInfo = JSON.stringify({
        cliente: cliente.value,
        tipo_servicio: tipo_servicio.value,
        fecha: fecha.value,
        pregunta_frecuente: pregunta_frecuente.value,
        estado: estado.value
    })
    //petición HTTP para guardar los datos
    axios.post(api_informacion_consultoria, nuevaInfo, {
        headers: { 'Content-Type': 'application/json' }
    })
        .then(function (response) {
            alert(response.data);
            listarInfoConsultoria();
        })
        .catch(function (error) {
            console.log(error)
        })
}

function buscarClienteInfo() {
    const cliente = document.getElementById("cliente_buscar").value;
    const info_busqueda = `${api_informacion_consultoria}filtrar?cliente=${cliente}`;
    realizarBusquedaInfo(info_busqueda);
}

function buscarFechaInfo() {
    const fecha = document.getElementById("fecha_buscar").value;
    const info_busqueda = `${api_informacion_consultoria}filtrar?fecha=${fecha}`;
    realizarBusquedaInfo(info_busqueda);
}

function buscarPreguntaFrecuenteInfo() {
    const prefrecuente = document.getElementById("prefrecuente_buscar").value;
    const info_busqueda = `${api_informacion_consultoria}filtrar?prefrecuente=${prefrecuente}`;
    realizarBusquedaInfo(info_busqueda);
}

function buscarEstadoInfo() {
    const estado = document.getElementById("estado_buscar").value;
    const info_busqueda = `${api_informacion_consultoria}filtrar?estado=${estado}`;
    realizarBusquedaInfo(info_busqueda);
}

function realizarBusquedaInfo(info_busqueda) {
    //limpiado de contenido
    document.getElementById("tbody_busqueda").innerHTML = "";

    axios.get(info_busqueda)
        .then(function (response) {
            for (var index = 0; index < response.data.length; index++) {
                var fila = "<tr>" +
                    "<td>" + response.data[index].cliente + "</td>" +
                    "<td>" + response.data[index].tipo_servicio + "</td>" +
                    "<td>" + response.data[index].fecha + "</td>" +
                    "<td>" + response.data[index].pregunta_frecuente + "</td>" +
                    "<td>" + response.data[index].estado + "</td>" +
                    "</tr>";
                //insercion al html
                document.getElementById("tbody_busqueda").insertRow(-1).innerHTML = fila;
            }
        })
        .catch(function (error) {
            console.log(`Error al realizar la búsqueda`);
        });
}





function listarUsers() {
    
    document.getElementById("tbody").innerHTML = "";

    axios.get(api_users)
        .then(function (response) {
            for (var index = 0; index < response.data.length; index++) {
                var fila = "<tr>" + //new fila
                    "<td>" + response.data[index].dni + "</td>" +
                    "<td>" + response.data[index].edad + "</td>" +
                    "<td>" + response.data[index].nombre + "</td>" +
                    "<td>" + response.data[index].apellido + "</td>" +
                    "<td>" + response.data[index].Sexo + "</td>" +
                    "<td>" + response.data[index].correo + "</td>" +
                    "</tr>"; //final fila
                //insercion al codigo html
                document.getElementById("tbody").insertRow(-1).innerHTML = fila;
            }
        })
        .catch(function (error) {
            console.log("Error al realizar la petición");
        });
}

function guardarUsers() {
    const newUsers = JSON.stringify({
        dni: cliente.value,
        edad: tipo_servicio.value,
        nombre: fecha.value,
        apellido: monto.value,
        Sexo: estado.value,
        correo: estado.value
    })
    //petición HTTP para guardar los datos
    axios.post(url_api, newUsers, {
        headers: { 'Content-Type': 'application/json' }
    })
        .then(function (response) {
            alert(response.data);
            listarUsers();
        })
        .catch(function (error) {
            console.log(error)
        })
}
//new met
function buscardniUsers() {
    const dni = document.getElementById("dni_buscar").value;
    const dni_busqueda = `${api_users}filtrar?dni=${dni}`;
    realizarBusquedaUsers(dni_busqueda);
}

function buscarApellidoUsers() {
    const apellido = document.getElementById("apellido_buscar").value;
    const apellido_busqueda = `${api_users}filtrar?apellido=${apellido}`;
    realizarBusquedaUsers(apellido_busqueda);
}

function buscarCorreoUsers() {
    const correo = document.getElementById("correo_buscar").value;
    const correo_busqueda = `${api_users}filtrar?correo=${correo}`;
    realizarBusquedaUsers(correo_busqueda);
}
//new(--)
function realizarBusquedaUsers(users_busqueda) {
    //limpiado de contenido
    document.getElementById("tbody_busqueda").innerHTML = "";

    axios.get(users_busqueda)
        .then(function (response) {
            for (var index = 0; index < response.data.length; index++) {
                var fila = "<tr>" +
                    "<td>" + response.data[index].dni + "</td>" +
                    "<td>" + response.data[index].edad + "</td>" +
                    "<td>" + response.data[index].nombre + "</td>" +
                    "<td>" + response.data[index].apellido + "</td>" +
                    "<td>" + response.data[index].Sexo + "</td>" +
                    "<td>" + response.data[index].correo + "</td>" +
                    "</tr>";
                //insercion al html
                document.getElementById("tbody_busqueda").insertRow(-1).innerHTML = fila;
            }
        })
        .catch(function (error) {
            console.log(`Error al realizar la búsqueda`);
        });
}



