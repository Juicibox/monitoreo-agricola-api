async function cargarCultivos(){

    const respuesta = await fetch(API + "/cultivos");

    const cultivos = await respuesta.json();

    let filas="";

    cultivos.forEach(cultivo=>{

        filas+=`

        <tr>

            <td>${cultivo.nombre}</td>

            <td>${cultivo.tipo}</td>

            <td>${cultivo.estado}</td>

            <td>${cultivo.parcela.nombre}</td>

        </tr>

        `;

    });

    document.getElementById("tablaCultivos").innerHTML=filas;

}

cargarCultivos();