async function cargarParcelas(){

    const respuesta = await fetch(API + "/parcelas");

    const parcelas = await respuesta.json();

    let filas = "";

    parcelas.forEach(parcela=>{

        filas += `
        <tr>

            <td>${parcela.nombre}</td>

            <td>${parcela.ubicacion}</td>

            <td>${parcela.area}</td>

            <td>${parcela.tipoSuelo}</td>

        </tr>
        `;

    });

    document.getElementById("tablaParcelas").innerHTML = filas;

}

cargarParcelas();