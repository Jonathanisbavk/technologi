const url_api = "http://localhost:3000/api/pagos-facturas/";
const api_empleados = "http://localhost:3000/api/empleados/";

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
    const nombre = document.getElementById("nombre_buscar").value;
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




