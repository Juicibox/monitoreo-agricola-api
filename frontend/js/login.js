const nombre = localStorage.getItem("usuario");

document.getElementById("bienvenida").innerHTML =
`Hola <b>${nombre}</b>, bienvenido al sistema.`;

async function login() {

    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    const respuesta = await fetch(API + "/auth/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            correo,
            contrasena
        })

    });

    const datos = await respuesta.json();

    if (respuesta.ok) {

        // Guardar información del usuario
        localStorage.setItem("usuario", datos.usuario.nombre);
        localStorage.setItem("correo", datos.usuario.correo);

        alert("Bienvenido " + datos.usuario.nombre);

        window.location = "dashboard.html";

    } else {

        alert(datos.mensaje);

    }

}