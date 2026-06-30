const nombre = localStorage.getItem("usuario");

document.getElementById("bienvenida").innerHTML =
`Hola <b>${nombre}</b>, bienvenido al sistema.`;

async function cargarDashboard(){

    const usuarios=await fetch(API+"/usuarios");
    const parcelas=await fetch(API+"/parcelas");
    const cultivos=await fetch(API+"/cultivos");

    const listaUsuarios=await usuarios.json();
    const listaParcelas=await parcelas.json();
    const listaCultivos=await cultivos.json();

    document.getElementById("totalUsuarios").textContent=listaUsuarios.length;
    document.getElementById("totalParcelas").textContent=listaParcelas.length;
    document.getElementById("totalCultivos").textContent=listaCultivos.length;

    const ctx=document.getElementById("graficoDashboard");

    new Chart(ctx,{

        type:"bar",

        data:{

            labels:[

                "Usuarios",
                "Parcelas",
                "Cultivos"

            ],

            datasets:[{

                label:"Cantidad",

                data:[

                    listaUsuarios.length,
                    listaParcelas.length,
                    listaCultivos.length

                ]

            }]

        }

    });

}

cargarDashboard();

const ctx = document.getElementById("graficoDashboard");

new Chart(ctx, {

    type: "bar",

    data: {

        labels: [

            "Usuarios",
            "Parcelas",
            "Cultivos"

        ],

        datasets: [{

            label: "Registros",

            data: [

                listaUsuarios.length,
                listaParcelas.length,
                listaCultivos.length

            ]

        }]

    }

});