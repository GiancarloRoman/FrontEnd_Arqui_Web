module.exports = function() {
    var data = {
        prendas: 
        [
            {
                id:1,
                nombrePrenda: "Pantalon",
                colorPrenda: "Rojo",
                disenoPrenda: "Entallados"
            },
            {
                id:2,
                nombrePrenda: "Camisa",
                colorPrenda: "Azul",
                disenoPrenda: "Rayado"
            },
            {
                id:3,
                nombrePrenda: "Polo",
                colorPrenda: "Negro",
                disenoPrenda: "Colorido"
            },
            {
                id:4,
                nombrePrenda: "Medias",
                colorPrenda: "Blancas",
                disenoPrenda: "Animado"
            },
            {
                id:5,
                nombrePrenda: "Falda",
                colorPrenda: "Rojo",
                disenoPrenda: "Falda larga"
            }
          
        ],
        marcas:
        [
            {
                id:1,
                nombreMarca:"Billabong"

            },
            {
                id:2,
                nombreMarca:"John Holden"
            },
            {
                id:3,
                nombreMarca:"Index"
            },
            {
                id:4,
                nombreMarca:"Marc Lewis"
            }

        ],
        tallas:
        [
            {
                id:1,
                letraTalla: "Small"

            },
            {
                id:2,
                letraTalla: "Medium"
            }
        ],
        clientes:
        [
            {
                id:1,
                nombreCliente:"Jesus",
                apellidoCliente:"Salazar",
                correo:"jesus213@outlook.com",
                telefono: 921368451,
                direccionCliente: "Av aviacion 123"
            }
        ],
        tiendas:
        [
            {
                id:1,
                nombreTienda: "Ripley",
                direccionTienda: "Surco 293",
                correo: "Ripley@empresarial.net",
                telefono:925786512
            }
        ]
    }
    return data
}
