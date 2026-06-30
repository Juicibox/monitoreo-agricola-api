document.addEventListener("DOMContentLoaded", function () {

    M.AutoInit();

    cargarUsuarios();

});

// ==========================
// Cargar usuarios
// ==========================

async function cargarUsuarios() {

    try {

        const respuesta = await fetch(API + "/usuarios");

        const usuarios = await respuesta.json();

        let filas = "";

        usuarios.forEach(usuario => {

            filas += `
                <tr>

                    <td>${usuario.nombre}</td>

                    <td>${usuario.correo}</td>

                    <td>${usuario.ubicacion}</td>

                    <td>

                        <a class="btn-small blue">
                            <i class="material-icons">edit</i>
                        </a>

                        <a class="btn-small red"
                           onclick="eliminarUsuario('${usuario._id}')">

                            <i class="material-icons">delete</i>

                        </a>

                    </td>

                </tr>
            `;

        });

        document.getElementById("tablaUsuarios").innerHTML = filas;

    } catch (error) {

        console.error(error);

    }

}

// ==========================
// Crear usuario
// ==========================

async function guardarUsuario() {

    const nombre = document.getElementById("nombre").value;

    const correo = document.getElementById("correo").value;

    const contrasena = document.getElementById("contrasena").value;

    const ubicacion = document.getElementById("ubicacion").value;

    const respuesta = await fetch(API + "/usuarios", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            nombre,
            correo,
            contrasena,
            ubicacion

        })

    });

    const datos = await respuesta.json();
    console.log(JSON.stringify(datos, null, 2));

    if (respuesta.ok) {

        M.toast({

            html: "✅ Usuario creado"

        });

        // Cerrar modal
        const modal = M.Modal.getInstance(document.getElementById("modalUsuario"));
        modal.close();

        // Limpiar formulario
        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("contrasena").value = "";
        document.getElementById("ubicacion").value = "";

        M.updateTextFields();

        // Recargar tabla
        cargarUsuarios();

    } else {

        M.toast({

            html: datos.mensaje

        });

    }

}

// ==========================
// Eliminar usuario
// ==========================

async function eliminarUsuario(id) {

    if (!confirm("¿Desea eliminar este usuario?")) {

        return;

    }

    const respuesta = await fetch(API + "/usuarios/" + id, {

        method: "DELETE"

    });

    const datos = await respuesta.json();

    M.toast({

        html: datos.mensaje

    });

    cargarUsuarios();

}