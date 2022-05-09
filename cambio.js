// //Crear una pagina que pueda recibir solamente bitcoin y
// dependiendo si el usuario quiere convertirlo a ethereum o dolar tiene que utilizar los siguientes cambios: 1 bitcoin = 13,5400ETH y 1 bitcoin 39.685,40 USD
// finalmente la pagina muestra el valor recibido y el cambio realizado
const   BITCOIN= 1;
const   BITCOINS_DOLARES =39.685;
const   BITCOINS_ETH = 13.5400 ;


let bitcoinDolares = "num por defecto";
let bitcoinEth = "num por defecto";


function cambio() {
    bitcoinDolares = document.querySelector('#bitcoinDolares').value;
    bitcoinEth = document.querySelector('#bitcoinEth').value;

    if (bitcoinDolares => 1 )  {
       
        document.querySelector('#mensaje_resultado').innerHTML =
        bitcoinDolares * BITCOINS_DOLARES;
    };
    }
    
    function cambioEth() {
    
        bitcoinEth = document.querySelector('#bitcoinEth').value;
    
        if (bitcoinEth => 1 )  {
           
            document.querySelector('#mensaje_resultado').innerHTML =
            bitcoinEth * BITCOINS_ETH;
        };
        


     
}

